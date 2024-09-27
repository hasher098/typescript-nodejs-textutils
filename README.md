# TS Node Text Utils App

This app allows to modify text saved in files.

## Installation

Use the node package manager to install it.

```
npm install
```

## Usage

To use this app user needs to provide input file, output file and modifications. For example

```
npm run start inputFile.txt outputFile.txt modificationOne modificationTwo:extraOption
```

This command will run app with two modifications and the result will be saved to outputFile
There is a list of available modifications: uppercase,lowercase,reverse,remove:char First three are just single word command but remove require extra parameter after :

Why syntax like that? In case of any upgrades in the future any other controller can be translated to this syntax after that app can be used with many different controllers. If u see any better option to handle it please contribute with pull request or comment.

## Unit tests

To run tests:

```
npm run test
```

It will run all tests and show coverage report.
