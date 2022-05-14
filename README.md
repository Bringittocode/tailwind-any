# tailwindCSS-any
Sometimes **installing a plugin** to apply a syle might not be neccessary that why this plugin came into play, use this plugin to apply any **style** that you ever **imagine**

It is very light to install.

## **How to use**

* Install
```bash
npm i @brintittocode/tailwindcss-any
```

* Add the plugin to your tailwindcss config file
```js
{
    ...
    plugins: [
        require("@bringitocode/tailwindcss-any")
        ...
    ],
}
```
* Example

> Pattern

```js
 any-[property||value]
 ```

with pure property value pair
```html
<h1 class="any-[color||white]">
    My tailwind plugin
</h1>
```

with dash property value pair
```html
<p class="any-[background-color||red]">
    yes is working
</p>
```

with property space value pair
>NOTE this **~** for creating space
```html
<p class="any-[padding||10px~20px~5px~13px]">
    yes is working
</p>
```

# **When to use it**
Use this when you want to apply your own style. **for example:**

* **1**

**lower browser** does not support **rgba color** (opacity) value but that what **tailwind** is using, you can use this **plugin** to add your style that is supported by all browser

>**THIS**
```html
<p class="text-white">
    yes is working
</p>
```
>Will output this css
```css
.text-white{
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}
// this is not supported by all browser and will be invalid property.
```
>Then use this plugin to apply your style
```html
<p class="any-[color||#fff]">
    yes is working
</p>
```
>Will output this css
```css
.any-\[color\|\|#fff\]{
    color: #fff;
}
// this is  supported by all browser.
```

* **2**

Imagin you want to use **line clamp** in your **css**, by **default** this is **`not included`** you have to install a plugin for it, instead you can use **`tailwindcss-any plugin`**.
```html
<p class="any-[-webkit-line-clamp||3]">
    yes is working
</p>
```

* 3

**`IMAGIN OF ANYTHING YOU CAN DO WITH IT`**

feel free to use, support, issue or anything.