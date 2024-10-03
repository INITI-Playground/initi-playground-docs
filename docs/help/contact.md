---
title: Contact us
template: contact.html
---


# Contact us

<form class="w-full max-w-lg" id="contact-form" method="POST">
  <input type="hidden" name="access_key" value="1b9ef1de-4cc9-4caa-926d-50da4a10d4b8">
  <div class="flex flex-wrap -mx-3 mb-4">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="grid-first-name">
        First Name
      </label>
      <input class="border-solid appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-300" id="grid-first-name" type="text" placeholder="Jane" name="firstName" required>
      <!--  <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="grid-last-name">
        Last Name
      </label>
      <input class="border-solid appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-300" id="grid-last-name" type="text" placeholder="Doe" name="lastName" required>
      <!--  <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-4">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="grid-email">
        Email
      </label>
      <input class="border-solid appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-300" id="grid-email" type="text"
    pattern="[^@\s]+@[^@\s]+\.[^@\s]+" placeholder="jane@example.com" name="email" required>
      <!--  <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
    </div>
  </div>
  
  <div class="flex flex-wrap -mx-3 mb-4">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="grid-note">
        Note
      </label>
      <textarea rows="3" style="min-height: 4rem" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-300" id="grid-note" type="text" placeholder="How can we assist you?" name="message" required></textarea>
      <!--  <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
    </div>
  </div>
  <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
  <div class="flex flex-wrap -mx-3">
    <div class="w-full px-3 mb-6 md:mb-0">
      <button  class="float-right bg-initi-dark hover:bg-initi-light text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>
    </div>
  </div>
</form>

<div class="flex h-40" id="form-thanks" style="display: none;">
    <div class="w-full max-w-lg my-auto">
        <div class="mx-auto text-center text-lg text-gray-700">
        Thank you for reaching out to us! <br />
        </div>
        <div class="mx-auto text-center text-sm text-gray-500">
        We will get back to you as soon as possible.
        </div>
    </div>
</div>

<div class="flex h-40" id="form-wait" style="display: none;">
    <div class="w-full max-w-lg my-auto">
        <div class="mx-auto text-center text-sm text-gray-500">
        Submitting the form...
        </div>
    </div>
</div>

<div class="flex h-40" id="form-error" style="display: none;">
    <div class="w-full max-w-lg my-auto">
        <div class="mx-auto text-center text-lg text-gray-700">
        Something went wrong! <br />
        </div>
        <div class="mx-auto text-center text-sm text-gray-500">
        Please try again later.
        </div>
    </div>
</div>




<script>
  function hideAll(){
      document.getElementById("contact-form").style.display = "none";
      document.getElementById("form-error").style.display = "none";
      document.getElementById("form-wait").style.display = "none";
      document.getElementById("form-thanks").style.display = "none";
      var h1s = document.getElementsByTagName("h1");
      for (var i = 0; i < h1s.length; i++) {
          var h1 = h1s[i];
          h1.innerHTML = "";
      }
  };
  function showThanks(){
      document.getElementById("form-thanks").style.display = "flex";
  };
  function showWait(){
      document.getElementById("form-wait").style.display = "flex";
  };
  function showError(){
      document.getElementById("form-error").style.display = "flex";
  };

  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    hideAll();
    showWait();

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            hideAll();
            showThanks();
        } else {
            console.log(response);
            hideAll();
            showError();
        }
    })
    .catch(error => {
        console.log(error);
        hideAll();
        showError();
    });
  });
</script>