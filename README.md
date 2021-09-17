# WordFrequency
A simple script to count the frequency of words in a string.
<br />
# Arguments
1. String (required) - String to be processed.
2. SortBy (optional) - 'desc' for descending or 'asc' ascending.
Example:

WordCounter(String, SortBy).then(res => {
  alert(JSON.stringify(res));
});

This returns a sorted object array.

# Usage
```html
<!DOCTYPE html>
<html>
<script type="module">
  import {WordCounter} from './WordCounter.js'
  const str = "With great power there must also come -- great responsibility.";

  WordCounter(str, 'asc').then(res => {
    alert(JSON.stringify(res));
  });

</script>
</html>
```  
# CDN
```html
<!DOCTYPE html>
<html>
<script src="https://thang2162.github.io/WordFrequency/WordFrequency.min.js" />
<script>
  const str = "With great power there must also come -- great responsibility.";

  WordCounter(str, 'asc').then(res => {
    alert(JSON.stringify(res));
  });

</script>
</html>
```
