# General Assembly Markdown Lint CLI Tool

This tool checks for formatting issues in markdown files using GA's markdown linting template. To use it:

- Create a JavaScript file in the root of your project.
- Install this tool with `npm i ga-mdlint`
- Add this code to your JavaScript file:

  ```javascript
  import { runLinter } from "ga-mdlint"

  runLinter()

  ```

- Run the file!

Rule explanations:

```javascript
{
  "default": true,

  // MD001/heading-increment
  // Heading levels should only increment by one level at a time
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md001.md
  "MD001": true,

  // MD003/heading-style
  // Heading style
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md003.md
  "MD003": {
    // Heading style
    "style": "atx" // Heading lines start with `#`
  },

  // MD004/ul-style 
  // Unordered list style
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md004.md
  "MD004": {
    // List style
    "style": "dash" // list items start with a dash
  },

  // MD005/list-indent
  // Inconsistent indentation for list items at the same level
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md005.md
  "MD005": true,

  // MD007/ul-indent
  // Unordered list indentation
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md007.md
  "MD007": {
    // Spaces for indent
    "indent": 2,
    // Whether to indent the first level of the list
    "start_indented": false,
  },

  // MD009/no-trailing-spaces
  // Trailing spaces
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md009.md
  "MD009": {
    // Spaces for line break
    "br_spaces": 0, // Spaces should not be used to create breaks
    // Allow spaces for empty lines in list items
    "list_item_empty_lines": false,
    // Include unnecessary breaks
    "strict": true
  },

  // MD010/no-hard-tabs
  // Hard tabs
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md010.md

  // Hard tabs are rendered inconsistently by GitHub. 
  // Tabs should be converted to spaces on save.
  "MD010": {
    // Include code blocks
    "code_blocks": true,
    // Fenced code languages to ignore
    "ignore_code_languages": [],
    // Number of spaces for each hard tab
    "spaces_per_tab": 2
  },

  // MD011/no-reversed-links
  // Reversed link syntax
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md011.md
  "MD011": true, // Ensures link syntax is correct

  // MD012/no-multiple-blanks 
  // Multiple consecutive blank lines
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md012.md
  "MD012": {
    // Consecutive blank lines
    "maximum": 1 
    // Except in a code block, blank lines serve no purpose and do not affect 
    // the rendering of content.
  },

  // MD013/line-length
  // Line length
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md013.md
  "MD013": {
    // Number of characters
    "line_length": 500, 
    // Strongly consider breaking up long lines of text into multiple 
    // lines to increase readability.
    // Number of characters for headings
    "heading_line_length": 80, // Headings should generally be fewer than 80 characters.
    // Number of characters for code blocks
    "code_block_line_length": 80, 
    // Lines in code blocks should be fewer than 80 characters to ensure 
    // readability when browsers are at half screen width on laptop displays.
    // Split code across lines when possible.
    // Include code blocks
    "code_blocks": true,
    // Include tables
    "tables": false,
    // Include headings
    "headings": true,
    // Strict length checking
    "strict": false,
    // Stern length checking
    "stern": false
  },

  // MD014/commands-show-output
  // Dollar signs used before commands without showing output
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md014.md
  "MD014": true,

  // MD018/no-missing-space-atx
  // No space after hash on atx style heading
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md018.md
  "MD018": true,

  // MD019/no-multiple-space-atx
  // Multiple spaces after hash on atx style heading
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md019.md
  "MD019": true,

  // MD020/no-missing-space-closed-atx
  // No space inside hashes on closed atx style heading
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md020.md
  "MD020": true, // Shouldn't exist, but is part of the default config.

  // MD021/no-multiple-space-closed-atx
  // Multiple spaces inside hashes on closed atx style heading
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md021.md
  "MD021": true, // Shouldn't exist, but is part of the default config.

  // MD022/blanks-around-headings
  // Headings should be surrounded by blank lines
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md022.md
  "MD022": {
    // Blank lines above heading
    "lines_above": 1, // Does not apply at the start of a document
    // Blank lines below heading
    "lines_below": 1
  },

  // MD023/heading-start-left
  // Headings must start at the beginning of the line
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md023.md
  "MD023": true,

  // MD024/no-duplicate-heading
  // Multiple headings with the same content
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md024.md
  "MD024": {
    // Only check sibling headings
    "siblings_only": true
  },

  // MD025/single-title/single-h1
  // Multiple top-level headings in the same document
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md025.md
  "MD025": {
    // Heading level
    "level": 1, // Documents can only have one title - the text of an H1 header.
  },

  // MD026/no-trailing-punctuation
  // Trailing punctuation in heading
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md026.md
  "MD026": {
    // Punctuation characters
    "punctuation": ".,;:。，；："
  },

  // MD027/no-multiple-space-blockquote
  // Multiple spaces after blockquote symbol
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md027.md
  "MD027": true,

  // MD028/no-blanks-blockquote
  // Blank line inside blockquote
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md028.md
  "MD028": true, 
  // Some Markdown parsers will treat two blockquotes separated by one or 
  // more blank lines as the same blockquote, while others will treat them 
  // as separate blockquotes.

  // MD029/ol-prefix
  // Ordered list item prefix
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md029.md
  "MD029": {
    // List style
    "style": "one_or_ordered" 
    // Prefer to specifically number lists, but a list of ones is allowed, 
    // and encouraged for longer lists.
  },

  // MD030/list-marker-space
  // Spaces after list markers
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md030.md
  "MD030": {
    // Spaces for single-line unordered list items
    "ul_single": 1,
    // Spaces for single-line ordered list items
    "ol_single": 1,
    // Spaces for multi-line unordered list items
    "ul_multi": 3,
    // Spaces for multi-line ordered list items
    "ol_multi": 2
    // See: 
    // https://cirosantilli.com/markdown-style-guide/#spaces-after-list-marker 
    // for rationale for the above.
  },

  // MD031/blanks-around-fences
  // Fenced code blocks should be surrounded by blank lines
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md031.md
  "MD031": {
    // Include list items
    "list_items": true
  },

  // MD032/blanks-around-lists
  // Lists should be surrounded by blank lines
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md032.md
  "MD032": true,

  // MD033/no-inline-html
  // Inline HTML
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md033.md
  "MD033": {
    // Allowed elements
    "allowed_elements": [
      "blockquote",
      "code",
      "div",
      "h1",
      "h2",
      "h3",
      "kbd",
      "p",
      "span"
    ]
  },

  // MD034/no-bare-urls
  // Bare URL used
  /// https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md034.md
  "MD034": true,

  // MD035/hr-style
  // Horizontal rule style
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md035.md
  "MD035": {
    // Horizontal rule style
    "style": "---"
  },

  // MD036/no-emphasis-as-heading
  // Emphasis used instead of a heading
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md036.md
  "MD036": {
    // Punctuation characters
    "punctuation": ".,;:!?。，；：！？"
  },

  // MD037/no-space-in-emphasis
  // Spaces inside emphasis markers
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md037.md
  "MD037": true,

  // MD038/no-space-in-code
  // Spaces inside code span elements
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md038.md
  "MD038": true,
  
  // MD039/no-space-in-links
  // Spaces inside link text
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md039.md
  "MD039": true,

  // MD040/fenced-code-language
  // Fenced code blocks should have a language specified
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md040.md
  "MD040": {
    // List of languages
    "allowed_languages": [
      "bash",
      "c",
      "c++",
      "cpp",
      "c#",
      "csharp",
      "css",
      "django",
      "dockerfile",
      "html",
      "java",
      "javascript",
      "json",
      "latex",
      "markdown",
      "pgsql",
      "plaintext",
      "powershell",
      "python",
      "scss",
      "shell",
      "sql",
      "typescript",
      "xml",
      "yaml"
    ],
    // Require language only
    "language_only": true
  },

  // MD041/first-line-heading/first-line-h1
  // First line in a file should be a top-level heading
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md041.md
  "MD041": false,
  // This is disabled to allow a div element to be placed on first line.

  // MD042/no-empty-links
  // No empty links
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md042.md
  "MD042": true,

  // MD043/required-headings
  // Required heading structure
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md043.md
  "MD043": {
    // List of headings
    "headings": ["*"], // We do not enforce docs to have specific headers
    // Match case of headings
    "match_case": false
  },

  // MD044/proper-names
  // Proper names should have the correct capitalization
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md044.md
  "MD044": {
    // List of proper names
    "names": [
      "JavaScript",
      "GitHub"
    ],
    // Include code blocks
    "code_blocks": false,
    // Include HTML elements
    "html_elements": false
  },

  // MD045/no-alt-text
  // Images should have alternate text (alt text)
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md045.md
  "MD045": true,

  // MD046/code-block-style
  // Code block style
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md046.md
  "MD046": {
    // Block style
    "style": "fenced" // Fenced code blocks should always be used.
  },

  // MD047/single-trailing-newline
  // Files should end with a single newline character
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md047.md
  "MD047": true,

  // MD048/code-fence-style
  // Code fence style
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md048.md
  "MD048": {
    // Code fence style
    "style": "backtick" // Fenced code blocks should always use backticks
  },

  // MD049/emphasis-style
  // Emphasis style
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md049.md
  "MD049": {
    // Emphasis style
    "style": "asterisk" // Asterisks should be used for emphasis
  },

  // MD050/strong-style
  // Strong style
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md050.md
  "MD050": {
    // Strong style
    "style": "asterisk" // Asterisks should be used to bold text
  },

  // MD051/link-fragments
  // Link fragments should be valid
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md051.md
  "MD051": true,

  // MD052/reference-links-images
  // Reference links and images should use a label that is defined
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md052.md
  "MD052": {
    // Include shortcut syntax
    "shortcut_syntax": false
  },

  // MD053/link-image-reference-definitions
  // Link and image reference definitions should be needed
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md053.md
  "MD053": {
    // Ignored definitions
    "ignored_definitions": [
      "//"
    ]
  },

  // MD054/link-image-style
  // Link and image style
  // https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md054.md
  "MD054": {
    // Allow autolinks
    "autolink": true,
    // Allow inline links and images
    "inline": true,
    // Allow full reference links and images
    "full": true,
    // Allow collapsed reference links and images
    "collapsed": true,
    // Allow shortcut reference links and images
    "shortcut": false,
    // Allow URLs as inline links
    "url_inline": true
  }
}
```
