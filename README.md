# WordFrequency
A simple script to count the frequency of words in a string.
<br />
# Installation
```
npm install @thang2162/wordfrequency --save
```
or
```
yarn add @thang2162/wordfrequency
```
# Arguments
1. String (required) - String to be processed.
2. SortBy (optional) - 'desc' for descending or 'asc' ascending.
Example:

WordCounter(String, SortBy).then(res => {
  alert(JSON.stringify(res));
});

This returns a sorted object array.

# Usage
```javascript
  import {WordFrequency} from '@thang2162/wordfrequency'
  const str = "With great power there must also come -- great responsibility.";

  WordFrequency(str, 'asc').then(res => {
    alert(JSON.stringify(res));
  });
```  
# CDN
```html
<!DOCTYPE html>
<html>
<script src="https://thang2162.github.io/WordFrequency/cdn.min.js"></script>
<script>
  const str = "With great power there must also come -- great responsibility.";

  WordFrequency(str, 'asc').then(res => {
    alert(JSON.stringify(res));
  });

</script>
</html>
```
