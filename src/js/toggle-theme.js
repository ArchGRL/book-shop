// export function getObject() {
//   ref = {
//     checkbox: document.getElementById('theme-checkbox'),
//     body: document.querySelector('body'),
//     header: document.querySelector('.header_btn__shopping'),
//     // newElem: document.querySelector('#seemore__btn'),
//   };
//   console.log(ref.checkbox);

// if (localStorage.getItem('theme') === 'dark') {
//   ref.checkbox.checked = true;
//   ref.body.classList.add('dark');
// }

// // Toggle theme on checkbox change
// ref.checkbox.addEventListener('change', () => {
//   if (ref.checkbox.checked) {
//     ref.body.classList.add('dark');
//     localStorage.setItem('theme', 'dark');
//   } else {
//     ref.body.classList.remove('dark');
//     localStorage.setItem('theme', 'light');
//   }
// });




//   // const object = Object.keys(ref);
//   // console.log(object);

//   // checkbox.addEventListener('change', () => {
//   //   if (checkbox.checked) {
//   //     getArrayAddList(object);
//   //     localStorage.setItem('theme', 'dark');
//   //   } else {
//   //     getArrayRemoveList(object);
//   //     localStorage.setItem('theme', 'light');
//   //   }
//   // });

//   // function getArrayAddList(array) {
//   //   array.forEach(data => ref[data].classList.add('dark'));
//   //   return array;
//   // }

//   // function getArrayRemoveList(array) {
//   //   array.forEach(data => ref[data].classList.remove('dark'));
//   //   return array;
//   // }
// }

export function getObject() {
  let ref = {
    checkbox: document.getElementById('theme-checkbox'),
    body: document.querySelector('body'),
    header: document.querySelector('.header_btn__shopping'),
    // newElem: document.querySelector('#seemore__btn'),
  };

  // Disable checkbox until page has loaded
  ref.checkbox.disabled = true;

  // Wait for page to finish loading
  window.addEventListener('load', () => {
    // Enable checkbox
    ref.checkbox.disabled = false;

    // Set initial theme based on local storage
    if (localStorage.getItem('theme') === 'dark') {
      ref.checkbox.checked = true;
      ref.body.classList.add('dark');
    }

    // Toggle theme on checkbox change
    ref.checkbox.addEventListener('change', () => {
      if (ref.checkbox.checked) {
        ref.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        ref.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  });
}

getObject();