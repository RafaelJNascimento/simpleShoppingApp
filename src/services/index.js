export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        itens: [
          {
            icon: 'flask-outline',
            name: 'Laboratórios',
          },
          {
            icon: 'cash-outline',
            name: 'Banco',
          },
          {
            icon: 'briefcase-outline',
            name: 'Trabalho',
          },
          {
            icon: 'bicycle-outline',
            name: 'Lazer',
          },
          {
            icon: 'fitness-outline',
            name: 'Saúde',
          },
          {
            icon: 'game-controller-outline',
            name: 'Jogos',
          },
        ],
        estabelecimentos: [
          {
            name: 'Shop',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images.jpeg'
          },
          {
            name: 'Shoping',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images%20(1).png'
          },
          {
            name: 'Yourbrand',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images%20(2).jpeg'
          },
          {
            name: 'FastDistcount',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images%20(3).jpeg'
          },
          {
            name: 'Company',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images%20(4).jpeg'
          },
          {
            name: 'Baby Store',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images%20(5).jpeg'
          },
          {
            name: 'Lorem Ipsum',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images%20(6).jpg'
          },
          {
            name: 'Bicycle Shop',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images%20(7).jpg'
          },{
            name: 'Shop',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images.jpeg'
          },
          {
            name: 'Shoping',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images%20(1).png'
          },
          {
            name: 'Yourbrand',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images%20(2).jpeg'
          },
          {
            name: 'FastDistcount',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images%20(3).jpeg'
          },
          {
            name: 'Company',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images%20(4).jpeg'
          },
          {
            name: 'Baby Store',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images%20(5).jpeg'
          },
          {
            name: 'Lorem Ipsum',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images%20(6).jpg'
          },
          {
            name: 'Bicycle Shop',
            img: 'https://raw.githubusercontent.com/RafaelJNascimento/simpleShoppingApp/master/src/assets/img/images%20(7).jpg'
          },
        ],
        user: {
          name: 'Rafael',
          email: 'rafaeljosev10@gmail.com',
        },
      });
    }, 2000);
  });
}