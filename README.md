# vegasLoadMore
Loading content without reloading the page

[![npm](https://img.shields.io/npm/v/vgloadmore.svg?style=flat-square&maxAge=600)](https://www.npmjs.com/package/vgloadmore) [![npm](https://img.shields.io/npm/l/vgloadmore.svg?style=flat-square)]()

## Install
```
npm i vgloadmore
```

or download [here](https://github.com/vegas-dev/vegasLoadMore/archive/master.zip)

## Dependencies
* jQuery >= 3

## Usage
```js
$('.btn-load-more').vegasLoadMore({
  limit: 50,
  offset: 50,
  route: 'https://url.site/get/load/content',
  params: {
    var1: 'any variable',
    var2: 'any variable',
  },
  onLoad: function($self, data) {
    var target = $self.attr('data-target');
    
    $(target).append(data.view); // Here is the generated view that is transferred from the server.
  },
  onClick: function($self) {
    // Button actions after clicking
  }
});
```

## Authors
[VEGAS STUDIO](https://vegas-dev.com)  Russia

## License 
Is published under the [MIT license](http://www.opensource.org/licenses/mit-license)
