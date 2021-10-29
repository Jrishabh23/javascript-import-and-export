# javascript-import-and-export

## Export

-   The export statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the import statement. The value of an imported binding is subject to change in the module that exports it. When a module updates the value of a binding that it exports, the update will be visible in its imported value.
-   Exported modules are in strict mode whether you declare them as such or not. The export statement cannot be used in embedded scripts.
-   There are two types of exports:
    1. Named Exports (Zero or more exports per module)
    2. Default Exports (One per module)
-   Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

## import

-   The static import statement is used to import read only live bindings which are exported by another module.
-   Imported modules are in strict mode whether you declare them as such or not.
-   The import statement cannot be used in embedded scripts unless such script has a type="module". Bindings imported are called live bindings because they are updated by the module that exported the binding.
-   There is also a function-like dynamic import(), which does not require scripts of type="module".
-   Backward compatibility can be ensured using attribute nomodule on the <script> tag.

## import vs require

How is require() different from import()

-   One of the major differences between require() and import() is that require() can be called from anywhere inside the program whereas import() cannot be called conditionally, it always runs at the beginning of the file.

-   To use the require() statement, a module must be saved with .js extension as opposed to .mjs when the import() statement is used.

-   ES modules can be loaded dynamically via the import() function unlike require().
