# Installing Webfonts
Follow these simple Steps.

## 1.
Put `sora/` Folder into a Folder called `fonts/`.

## 2.
Put `sora.css` into your `css/` Folder.

## 3. (Optional)
You may adapt the `url('path')` in `sora.css` depends on your Website Filesystem.

## 4.
Import `sora.css` at the top of you main Stylesheet.

```
@import url('sora.css');
```

## 5.
You are now ready to use the following Rules in your CSS to specify each Font Style:
```
font-family: Sora-Thin;
font-family: Sora-ThinItalic;
font-family: Sora-ExtraLight;
font-family: Sora-ExtraLightItalic;
font-family: Sora-Light;
font-family: Sora-LightItalic;
font-family: Sora-Regular;
font-family: Sora-Italic;
font-family: Sora-Medium;
font-family: Sora-MediumItalic;
font-family: Sora-SemiBold;
font-family: Sora-SemiBoldItalic;
font-family: Sora-Bold;
font-family: Sora-BoldItalic;
font-family: Sora-ExtraBold;
font-family: Sora-ExtraBoldItalic;
font-family: Sora-Variable;
font-family: Sora-VariableItalic;

```
## 6. (Optional)
Use `font-variation-settings` rule to controll axes of variable fonts:
wght 400.0

Available axes:
'wght' (range from 100.0 to 800.0

