import fs from "fs"
import path from "path"
import markdownlint from "markdownlint"
import colors from "colors"

function runLinter() {
  const markdownFilePaths = getMarkdownFilePaths(process.cwd())
  const problems = findProblems(markdownFilePaths)
  render(markdownFilePaths, problems)
}

function getMarkdownFilePaths(directory) {
  const ignoreList = [
    ".git",
    "_layouts",
    "assets",
    "node_modules",
  ]
  const dirContents = fs.readdirSync(directory)
  const markdownFilePaths = []

  for (const item of dirContents) {
    if (ignoreList.includes(item)) continue

    const itemPath = `${directory}/${item}`

    if (fs.statSync(itemPath).isDirectory()) {
      const filePaths = getMarkdownFilePaths(itemPath)
      filePaths.forEach(filePath => markdownFilePaths.push(filePath))
    } else {
      const { ext } = path.parse(itemPath)
      if (ext === ".md") {
        markdownFilePaths.push(itemPath)
      }
    }
  }
  return markdownFilePaths
}

function findProblems(markdownFilePaths) {
  const options = {
    files: markdownFilePaths,
    config: markdownlint.readConfigSync(`${process.cwd()}/.markdownlint.json`)
  }
  
  return markdownlint.sync(options)
}

function render(markdownFilePaths, problems) {
  markdownFilePaths.forEach(file => {
    const issues = problems[file]
    issues.sort((firstIssue, secondIssue) => {
      return firstIssue.lineNumber - secondIssue.lineNumber
    })
    issues.length ? logFileProblem(file, issues) : logFileSuccess(file)
  })

  const isProblemFound = markdownFilePaths.some(file => problems[file].length)

  if (isProblemFound) {
    console.log(colors.red(`🛑 Some Markdown formatting problems were found and should be resolved. See the notes above for details.`))
  } else {
    console.log(colors.green(`🥳 No problems were found. Congrats!`))
  }
}

function logFileSuccess(file) {
  const rel = file.replace(process.cwd(), ".")
  console.log(colors.white(`🚀 ${rel}`), colors.green(`has no issues!`));
}

function logFileProblem(file, issues) {
  const rel = file.replace(process.cwd(), ".")
  console.log(colors.white(`❌ ${rel}`), colors.red(`has these issues:`))
  console.log()
  issues.forEach(issue => {
    console.log(`   Line: ${colors.yellow(`${issue.lineNumber}`)}`)
    console.log(`     Issue ID: ${colors.yellow(`${issue.ruleNames[0]}`)}`)
    console.log(
      `     Details: ${issue.ruleDescription}`, 
      issue.errorDetail ? `- ${issue.errorDetail}` : ""
    )
    console.log(`     Background: ${issue.ruleInformation}`)
    console.log()
  })
}

export { runLinter }
