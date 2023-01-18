const ball=document.querySelector('.ball');
const quote = document.querySelector('.quote');
const input = document.querySelector('.input');
const anotherOneBtn = document.querySelector('.another-one');
const error = document.querySelector('.error')


const answers = ['tak!', 'nie :(', 'może...', 'serio pytasz?', 
                'czas pokaże', 'zapytaj jutro', 'może frytki do tego?',
                 'spróbuj jutro', 'nie licz na to',
                'kto to wie', 'tego nie wie nikt'];

const showAnswer = () =>{
   if(input.value !== ''){

   ball.classList.add('active');
    input.value = '';
    const answer = Math.floor(Math.random() * answers.length);
    quote.style.display = 'flex';
    quote.textContent = 'Odpowiedź:   ' + answers[answer];

    input.style.display = 'none';
    anotherOneBtn.style.display = 'flex'
    error.textContent=''
    } else{
        error.textContent="musisz wpisać pytanie"
    } 
    

}
const clearPage = () =>{
    quote.textContent = '';
    quote.style.display = 'none';
    error.textContent='';

    input.style.display = 'flex';
    anotherOneBtn.style.display='none';

    

}


ball.addEventListener('click', showAnswer);
anotherOneBtn.addEventListener('click', clearPage)