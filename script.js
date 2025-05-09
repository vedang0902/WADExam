function showInfo(orgfarm) {
    const infoBox = document.getElementById('Organic-Fruits-and-vegetables');
    let content = '';
  
    if (orgfarm === 'Tomatoes') {
      content = `
        <h3>Tomatoes</h3>
        <img src="C:/Users/student/Desktop/New folder/tomatoseeds.webp" alt="Tomatoes" class="img-fluid mb-2">
        <p>biologically a fruit that is grown in organic environment</p>
      `;
    } else if (orgfarm === 'Potato') {
      content = `
        <h3>Potato</h3>
        <img src="C:/Users/student/Desktop/New folder/Potato.jpg" alt="Potato" class="img-fluid mb-2">
        <p>A rich in starch vegetable grown underground. we keep it organic as well.</p>
      `;
    } else if (orgfarm === 'Spinach') {
      content = `
        <h3>Spinach</h3>
        <img src="C:/Users/student/Desktop/New folder/Spinach.webp" alt="Spinach" class="img-fluid mb-2">
        <p>Iron rich leafy vegetable. Grown in organic environment</p>
      `;
    }
    else if (orgfarm === 'Mango') {
      content = `
        <h3>Mango</h3>
        <img src="C:/Users/student/Desktop/New folder/Mango.webp" alt="Mango" class="img-fluid mb-2">
        <p>King of fruits, being hampered by fertilizers nowadays, we grow it naturally in amrai</p>
      `;
    }else if (orgfarm === 'Banana') {
      content = `
        <h3>Banana</h3>
        <img src="C:/Users/student/Desktop/New folder/yellow-organic-banana.jpeg" alt="Banana" class="img-fluid mb-2">
        <p>Bananas grown in organic fashion. We store the banana flower as well. Ripening is done organically</p>
      `;
    }
    else if (orgfarm   === 'Chickoo') {
      content = `
        <h3>Chickoo</h3>
        <img src="C:/Users/student/Desktop/New folder/chikku.jpg" alt="Chickoo" class="img-fluid mb-2">
        <p>Perfect for snacking, smoothies, and desserts, our chikoo provides a nutritious and delicious addition to your diet. Enjoy the natural sweetness and health benefits of our organically grown chikoo.</p>
      `;
    }
    infoBox.innerHTML = content;
  }
  