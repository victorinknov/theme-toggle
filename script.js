// 01 - Defining the HTML document.
const html = document.querySelector("html");
// 02 - Defining the CHECKBOX element.
const checkbox = document.querySelector("input[name=theme]")
// 03 - Creating a variable to getting style multiple times easier.
const getStyle = (element, style) => window.getComputedStyle(element).getPropertyPriority(style)
// 04 - Defining themes (01).
const initialColors = {
     bg: getStyle(html, "--bg"),
     bgPanel: getStyle(html, "--bg-panel"),
     colorHeading: getStyle(html, "--color-heading"),
     colorText: getStyle(html, "--color-text"),

}
// 04 - Defining themes (02).
const darkMode = {
     bg: "#181818",
     bgPanel: "#252525",
     colorHeading: "#3664ff",
     colorText: "#c5c5c5"
}
// 05 - Transforming variables to CSS format (--name-of-variable).
const transformKey = key =>
 "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()
// 06 - Function to change theme.
const changeColors = (colors) => {
     Object.keys(colors).map(key =>
          html.style.setProperty(transformKey(key), colors[key])
          )
}
// 07 - Setting a listener to checkbox.
checkbox.addEventListener("change", ({target}) =>{
     target.checked ? changeColors(darkMode) : changeColors(initialColors)
});