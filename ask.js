const submit = document.querySelector('#submit');
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const getDiv = document.querySelector('.ask-div');


submit.addEventListener('click', function(e){
    e.preventDefault();
    const nameValue = name.value;
    const ageValue = age.value;
    const creatDiv = document.createElement('div');
    creatDiv.id = 'div2';
    const createLabel = document.createElement('label');
    createLabel.innerText = 'What do you feel?';
    const creatButton1 = document.createElement('button');
    creatButton1.innerText = 'stressed';
    const creatButton2 = document.createElement('button');
    creatButton2.innerText = 'angry';
    const creatButton3 = document.createElement('button');
    creatButton3.innerText = 'sad';
    const creatButton4 = document.createElement('button');
    creatButton4.innerText = 'scared/worried';
    const discription = document.createElement('textarea');
    const okButton = document.createElement('button');
    okButton.innerText = 'ok';
    const bullyingButton = document.createElement('button');
    bullyingButton.innerText = 'BULLYING';
    const creatH2 = document.createElement('h2');
    const creatSecH2 = document.createElement('h2');
    creatSecH2.innerText = 'Or you feel another felling ,write it here:'; 
    creatH2.innerText = `welcome ${nameValue}`;
    creatDiv.insertAdjacentElement('afterbegin',creatH2);
    creatDiv.append(createLabel);
    creatDiv.append(creatButton1);
    creatDiv.append(creatButton2);
    creatDiv.append(creatButton3);
    creatDiv.append(creatButton4);
    creatDiv.append(creatSecH2);
    creatDiv.append(discription);
    creatDiv.insertAdjacentElement('beforeend',okButton);
    creatDiv.insertAdjacentElement('beforeend',bullyingButton);

    
    creatButton1.addEventListener('click', function(){
        creatButton2.remove();
        creatButton3.remove();
        creatButton4.remove();
        creatH2.remove();
        creatSecH2.remove();
        okButton.remove();
        bullyingButton.remove();
        const creatP = document.createElement('p');
        const creatP2 = document.createElement('p');
        const creatH3 = document.createElement('h3');
        const createButton = document.createElement('button');
        createButton.innerText = 'send';
        creatH3.innerText = `Explain your problem.what happend to feel ${creatButton1.innerText} `;
        creatP.innerText = 'so, before you explain your problem, I recommend you to first [if you are sitting ,stand up ]and move for 2 minutes or [listen to music] ';
        creatP2.innerText = `or read one of the these books that will help you in your problem :
        1-The Myth of stress.
        2-Stop stress in three steps.
        3-The stress Effect,  `;
        const creatdiv3 =document.createElement('div');
        creatdiv3.id = 'div3';
        creatdiv3.prepend(creatP2);
        creatdiv3.prepend(creatP);
        creatdiv3.append(creatH3);
        creatdiv3.append(discription);
        creatdiv3.insertAdjacentElement('beforeend',createButton);
        creatDiv.insertAdjacentElement('afterend',creatdiv3);
        createButton.addEventListener('click', function(){
            const creatDiv4 = document.createElement('div');
            creatDiv4.id = 'div4';
            creatDiv4.innerText =`OK "${nameValue}", just wait 5 minute and the thirapist will contact with you`;
            creatdiv3.insertAdjacentElement('afterend',creatDiv4);
        })
    })
    creatButton2.addEventListener('click', function(){
        creatButton1.remove();
        creatButton3.remove();
        creatButton4.remove();
        creatH2.remove();
        okButton.remove();
        creatSecH2.remove();
        bullyingButton.remove();
        const creatP = document.createElement('p');
        const creatP2 = document.createElement('p');
        const creatH3 = document.createElement('h3');
        const createButton = document.createElement('button');
        createButton.innerText = 'send';
        creatH3.innerText = `Explain your problem.what happend to feel ${creatButton2.innerText} `;
        creatP.innerText = 'so, before you explain your problem, I recommend you to first breath regulary for 2 minutes ';
        creatP2.innerText = `or read one of the these books that will help you in your problem :
        1-Anger: Handling a Powerful Emotion in a Healthy Way
        2-The Dance of Anger: A Woman’s Guide to Changing the Patterns of Intimate Relationships
        3-Anger: Wisdom for Cooling the Flames  `;
        const creatdiv3 =document.createElement('div');
        creatdiv3.id = 'div3';
        creatdiv3.prepend(creatP2);
        creatdiv3.prepend(creatP);
        creatdiv3.append(creatH3);
        creatdiv3.append(discription);
        creatdiv3.insertAdjacentElement('beforeend',createButton);
        creatDiv.insertAdjacentElement('afterend',creatdiv3);
        createButton.addEventListener('click', function(){
            const creatDiv4 = document.createElement('div');
            creatDiv4.id = 'div4';
            creatDiv4.innerText =`OK "${nameValue}", just wait 5 minute and the thirapist will contact with you`;
            creatdiv3.insertAdjacentElement('afterend',creatDiv4);
        })

    })
    creatButton3.addEventListener('click', function(){
        creatButton1.remove();
        creatButton2.remove();
        creatButton4.remove();
        creatH2.remove();
        creatSecH2.remove();
        okButton.remove();
        bullyingButton.remove();
        const creatP = document.createElement('p');
        const creatP2 = document.createElement('p');
        const creatH3 = document.createElement('h3');
        const createButton = document.createElement('button');
        createButton.innerText = 'send';
        creatH3.innerText = `Explain your problem.what happend to feel ${creatButton3.innerText} `;
        creatP.innerText = 'so, before you explain your problem, I recommend stop thinking about what makes you sad for 2 minutes ';
        creatP2.innerText = `or read one of the these books that will help you in your problem :
        1-everything I Never Told .
        2-Stop thinking about bad things.
        3-How can i be happy `;
        const creatdiv3 =document.createElement('div');
        creatdiv3.id = 'div3';
        creatdiv3.prepend(creatP2);
        creatdiv3.prepend(creatP);
        creatdiv3.append(creatH3);
        creatdiv3.append(discription);
        creatdiv3.insertAdjacentElement('beforeend',createButton);
        creatDiv.insertAdjacentElement('afterend',creatdiv3);
        createButton.addEventListener('click', function(){
            const creatDiv4 = document.createElement('div');
            creatDiv4.id = 'div4';
            creatDiv4.innerText =`OK "${nameValue}", just wait 5 minute and the thirapist will contact with you`;
            creatdiv3.insertAdjacentElement('afterend',creatDiv4);
        
        })

    })
    creatButton4.addEventListener('click', function(){
        creatButton1.remove();
        creatButton2.remove();
        creatButton3.remove();
        creatH2.remove();
        creatSecH2.remove();
        okButton.remove();
        bullyingButton.remove();
        const creatP = document.createElement('p');
        const creatP2 = document.createElement('p');
        const creatH3 = document.createElement('h3');
        const createButton = document.createElement('button');
        createButton.innerText = 'send';
        creatH3.innerText = `Explain your problem.what happend to feel ${creatButton4.innerText} `;
        creatP.innerText = 'so, before you explain your problem, I recommend stop thinking about what makes you worried or scared for 2 minutes ';
        creatP2.innerText = `or read one of the these books that will help you in your problem :
        1-NO Worries .
        2-The huge bag of worries.`;
        const creatdiv3 =document.createElement('div');
        creatdiv3.id = 'div3';
        creatdiv3.prepend(creatP2);
        creatdiv3.prepend(creatP);
        creatdiv3.append(creatH3);
        creatdiv3.append(discription);
        creatdiv3.insertAdjacentElement('beforeend',createButton);
        creatDiv.insertAdjacentElement('afterend',creatdiv3);
        createButton.addEventListener('click', function(){
            const creatDiv4 = document.createElement('div');
            creatDiv4.id = 'div4';
            creatDiv4.innerText =`OK "${nameValue}", just wait 5 minute and the thirapist will contact with you`;
            creatdiv3.insertAdjacentElement('afterend',creatDiv4);
        })

    })
    okButton.addEventListener('click', function(){
        creatButton1.remove();
        creatButton4.remove();
        creatButton2.remove();
        creatButton3.remove();
        createLabel.remove();
        creatSecH2.remove();
        bullyingButton.remove();
        const creatP = document.createElement('p');
        const creatP2 = document.createElement('p');
        const creatH3 = document.createElement('h3');
        const createButton = document.createElement('button');
        createButton.innerText = 'send';
        creatH3.innerText = `Explain your problem.what happend to feel ${discription.value} `;
        creatP.innerText = `so, before you explain your problem, I recommend you to relax for  2 minutes`;
        const creatdiv3 =document.createElement('div');
        creatdiv3.id = 'div3';
        creatdiv3.prepend(creatP);
        creatdiv3.append(creatH3);
        creatdiv3.append(discription);
        creatdiv3.insertAdjacentElement('beforeend',createButton);
        creatDiv.insertAdjacentElement('afterend',creatdiv3);
        createButton.addEventListener('click', function(){
            const creatDiv4 = document.createElement('div');
            creatDiv4.id = 'div4';
            creatDiv4.innerText =`OK "${nameValue}", just wait 5 minute and the thirapist will contact with you`;
            creatdiv3.insertAdjacentElement('afterend',creatDiv4);
        })
        

    })
    bullyingButton.addEventListener('click', function(){
        creatButton1.remove();
        creatButton2.remove();
        creatButton3.remove();
        creatButton4.remove();
        creatH2.remove();
        creatSecH2.remove();
        okButton.remove();
        const creatP = document.createElement('p');
        const creatP2 = document.createElement('p');
        const creatH3 = document.createElement('h3');
        const createButton = document.createElement('button');
        createButton.innerText = 'send';
        creatH3.innerText = `Explain your problem.`;
        creatP.innerText = `calm down , and relax.Do you talk to anyone about you problem? if you don't ,so tell us  about it .`;

        const creatdiv3 =document.createElement('div');
        creatdiv3.id = 'div3';
        creatdiv3.prepend(creatP);
        creatdiv3.append(creatH3);
        creatdiv3.append(discription);
        creatdiv3.insertAdjacentElement('beforeend',createButton);
        creatDiv.insertAdjacentElement('afterend',creatdiv3);
        createButton.addEventListener('click', function(){
            const creatDiv4 = document.createElement('div');
            creatDiv4.id = 'div4';
            creatDiv4.innerText =`OK "${nameValue}", just wait 5 minute and the thirapist will contact with you`;
            creatdiv3.insertAdjacentElement('afterend',creatDiv4);
        })

    })

    getDiv.insertAdjacentElement('afterend', creatDiv);

})








