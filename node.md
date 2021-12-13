# Node

A JavaScript runtime built on the V8 engine. Allows for back-end applications powered by JavaScript.

The [Node website](https://nodejs.org/en/) provides further information, guides, and docs.

## Modules

The equivalent to the **window** object found in browsers is the **global** object.

Variables and functions are added to the global scope (window object) in browsers, but this can does not exist in Node.

Node lets us make use of **modules** to encapsulate variable and functions. All files in a Node application is a module whose code is automatically wrapped with an immediately-invoked function expression to create scope. Variables and functions declared in a module are only scoped to that module unless exported using **module.exports**.

Applications have a main module usually called **app.js** or **index.js**.

Each module has access to various local objects and properties.

- **exports** - Reference to module.exports.
- **require** - What files are required by this module.
- **module** - Information about this module and what it exports.
- **__filename** - The full path of this file including filename.
- **__dirname** - The full path of this file's directory.

### Built-in modules

Node has several built-in modules that let us work with the file system, paths, network, operating system, and http requests and responses.

**EventEmitter** is one of Node's core classes that let us emitand handle events. Several built-in classes in Node derive from EventEmitter.

We should **extend** EventEmitter to create a class with the ability to raise events.

## Node package manager (npm)

What is it?

npm init / npm init --yes -> package.json

Installing a node package (+ globally / specific versions)

Updating a package (npm outdated / npm update)

Using a package

Installing dependencies using package.json using npm i

Listing installed packages + viewing package registry info

Uninstall node packages (npm un package)

Semantic versioning

dependencies vs devDependencies (e.g., npm i jshint --save-dev)

