# vegasLoadMore
Loading content without reloading the page

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
  }
});
```
