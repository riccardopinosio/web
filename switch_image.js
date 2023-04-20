const options = {
  attributes: true
}

var mode = undefined

function callback(mutationList, observer) {
  mutationList.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      // handle class change
        if (document.body.classList.contains("quarto-light") && mode != "light") {
            mode = "light"
            document.querySelectorAll('.light-hide').forEach(function(el) {
                el.style.display = 'none';
            })
            document.querySelectorAll('.dark-hide').forEach(function(el) {
                el.style.display = '';
            })
        }

        if (document.body.classList.contains("quarto-dark") && mode != "dark") {
            mode = "dark"
            document.querySelectorAll('.dark-hide').forEach(function(el) {
                el.style.display = 'none';
            })
            document.querySelectorAll('.light-hide').forEach(function(el) {
                el.style.display = '';
            })
        }
    }
  })
}

const observer = new MutationObserver(callback)
observer.observe(document.body, options)
