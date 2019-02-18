# SBadgeComponent

Create easily some badges with colors and icons support


### Example
```html
	<span class="badge">1</span>
<span class="badge badge--primary">1</span>
<span class="badge badge--secondary">1</span>
<span class="badge badge--success">1</span>
<span class="badge badge--error">1</span>
<span class="badge badge--warning">1</span>
<span class="badge badge--info">1</span>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


## Mixins


### s-badge

Print out the bare and style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The color to generate  |  optional  |  default


### s-badge-bare

Print out the bare component css


### s-badge-style

Print out the style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color to generate  |  optional  |  default