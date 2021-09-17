# WordFrequency
A simple script to count the frequency of words in a string.
<br />
# Usage
```html
<!DOCTYPE html>
<html>
<script type="module">
  import {WordCounter} from './WordCounter.js'
  const str = "With great power there must also come -- great responsibility.";

  WordCounter(str, 'asc').then(res => {
    alert(JSON.stringify(res));
  })

</script>
</html>
```  
<br />
<br />
This list was complied using data from: https://www.caffeineinformer.com/the-caffeine-database<br/>
<br/>
This list can be fetched using http get at: https://thang2162.github.io/CaffeinatedBeveragesJSON/db.json
