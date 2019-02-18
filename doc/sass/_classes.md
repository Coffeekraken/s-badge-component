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


### s-badge-classes

Print out the bare and style component css
Generated classes:
- `.badge`
- `.badge--{color}`


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary


### s-badge-classes-bare

Print out the bare component css
Generated classes:
- `.badge`


### s-badge-classes-style

Print out the style component css
Generated classes:
- `.badge`
- `.badge--{color}`


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary