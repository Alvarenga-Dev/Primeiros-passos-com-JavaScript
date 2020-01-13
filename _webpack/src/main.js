import api from './api';

class App {
    constructor() {
        this.users = [];
        this.formElement = document.querySelector('#repo-form');
        this.inputElement = document.querySelector('#repo-input-name');
        this.listElement = document.querySelector('#repo-list');
        this.registerHandlers();
    }

    registerHandlers() {
        this.formElement.addEventListener('submit', event => this.addUser(event)); 
    }

    setLoading( loading = true ){
        if (loading) {
            const loadingElement = document.createElement('span');
            loadingElement.appendChild(document.createTextNode('Carregando...'));
            loadingElement.setAttribute('id', 'loading');

            this.formElement.appendChild(loadingElement);
        } else {
            document.querySelector('#loading').remove();
        }
    }

    async addUser(event) {
        event.preventDefault();

        const inputLogin = this.inputElement.value;

        this.setLoading();

        if(inputLogin === '') {
            alert('Campo Vazio!')
            this.setLoading(false);
            return;
        }
      
        try {

            const response = await api.get(`users/${inputLogin}`);
            const { login, bio, avatar_url, html_url } = response.data;
        
            this.users.push({
                login,
                bio,
                avatar_url,
                html_url,
            })

            this.render();

        } catch (error) {
            alert('O usuário não existe!')
        }

        this.inputElement.value = '';
        this.setLoading(false)
    }

    render(){
        this.listElement.innerHTML = '';

        this.users.forEach( user => {
            const imgElement = document.createElement('img');
            imgElement.setAttribute('src', user.avatar_url);

            const titleElement = document.createElement('strong');
            titleElement.appendChild(document.createTextNode(user.login));

            const descriptionElement = document.createElement('p');
            descriptionElement.appendChild(document.createTextNode(user.bio));
            
            const linkElement = document.createElement('a');
            linkElement.setAttribute('target', '_blank');
            linkElement.setAttribute('href', user.html_url);
            linkElement.appendChild(document.createTextNode('Ver Perfil'));

            const listItemElement = document.createElement('li');

            listItemElement.appendChild(imgElement);
            listItemElement.appendChild(titleElement);
            listItemElement.appendChild(descriptionElement);
            listItemElement.appendChild(linkElement);

            this.listElement.appendChild(listItemElement);
            
        });

    }
}

new App();