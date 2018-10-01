# Check Size Change

React Parent Wrapper Component that checks if the Screen Size has change

## Usage

Simply install the application
```
npm i @nmole/checkSizeChange

```

Then add the wrapper to your Component

```
export default checkSizeChange(Home);
```

Now the Home Component will have a two new booleans isMobileLimit & isTabletLimit

## Editing Default Sizes

Both of the default size checks follow bootstrap sizes

isMobileLimit: 576
isTabletLimit: 992

If you want to edit this sizes you can by sending and object to checkSizeChange using the key
words `mobile` and `tablet`


```
export default checkSizeChange(Home, {mobile: 500, tablet: 769});
```

#### Adding Custom Sizes

But what if you want to check against other sizes?

If you want to make something like `isTooSmallForMenu` with the
size of `632`

Do this: 

```
const extraSizes = [
	{
		prop: 'isTooSmallForMenu',
		limit: 632
	}
];

export default checkSizeChange(Home, {extraSizes});

```

Now the Home Component will get a new boolean prop called `isTooSmallForMenu`!

**extraSizes** can be an infinitly long array of objects

`prop:` is the name of the passed prop
`limit:` is the limit size of the prop

