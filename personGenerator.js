let generatedRandomGender = '';
const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Доржиев",
            "id_2": "Цыденов",
            "id_3": "Самбуев",
            "id_4": "Борсоев",
            "id_5": "Бадмаев",
            "id_6": "Бальжинимаев",
            "id_7": "Шарапов",
            "id_8": "Дамдинов",
            "id_9": "Будаев",
            "id_10": "Цоктоев",
            "id_11": "Дулмаев",
            "id_12": "Бандеев",
            "id_13": "Ринчинов",
            "id_14": "Халзанов",
            "id_15": "Левантуев",
            "id_16": "Рантаров"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Эрдэм",
            "id_2": "Баир",
            "id_3": "Алдар",
            "id_4": "Булат",
            "id_5": "Чингис",
            "id_6": "Жаргал",
            "id_7": "Гэсэр",
            "id_8": "Алексей",
            "id_9": "Владимир",
            "id_10": "Зорик"

        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Алтана",
            "id_3": "Мария",
            "id_4": "Арюна",
            "id_5": "Оюна",
            "id_6": "Сарюна",
            "id_7": "Сэсэг",
            "id_8": "Дулма",
            "id_9": "Баирма",
            "id_10": "Надежда"
        }
    }`,

    ProfessionMaleJson: `{
        "count": 6,
        "list": {     
            "id_1": "Врач",
            "id_2": "Инженер",
            "id_3": "Строитель",
            "id_4": "Электрик",
            "id_5": "Полицейский",
            "id_6": "Спасатель"

        }
    }`,

    ProfessionFemaleJson: `{
        "count": 6,
        "list": {     
            "id_1": "Бухгалтер",
            "id_2": "Медсестра",
            "id_3": "Преподаватель",
            "id_4": "Певица",
            "id_5": "Модельер",
            "id_6": "Журналист"

        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {

        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  
        return obj.list[prop];
    },

    randomGender: function() {
        
        let myArray = [this.GENDER_MALE, this.GENDER_FEMALE];
        let rand = Math.floor(Math.random() * myArray.length);
        generatedRandomGender = myArray[rand];

        return myArray[rand];

    },

    randomFirstName: function() {
        
        return generatedRandomGender == this.GENDER_MALE ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson)

    },


    randomSurname: function() {
        
        return generatedRandomGender == this.GENDER_MALE ? this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson) + 'a';

    },

    randomDateOfBirth: function() {
        
        randomMonthOfBirth = this.randomIntNumber(11, 1);
        if (randomMonthOfBirth == 2) {
            randomDayOfBirth = this.randomIntNumber(28, 1);
        } else if (randomMonthOfBirth == 4 || randomMonthOfBirth == 6 || randomMonthOfBirth == 9 || randomMonthOfBirth == 11){
            randomDayOfBirth = this.randomIntNumber(30, 1); 
        } else {
            randomDayOfBirth = this.randomIntNumber(31, 1);
        }
        
        randomYearOfBith = this.randomIntNumber(2000, 1965);

        let nameOfTheMonth = [
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'ноября',
            'декабря',
        ];

        randomMonthOfBirth = nameOfTheMonth[randomMonthOfBirth - 1] ;

        return randomDayOfBirth + ' ' + randomMonthOfBirth + ' ' + randomYearOfBith;

    },
    
    randomFatherName: function() {
        
        let generatedRandomFatherName = this.randomValue(this.firstNameMaleJson);
        let lastСharacter = generatedRandomFatherName.substring(generatedRandomFatherName.length - 1);

        if (generatedRandomGender == this.GENDER_MALE){
            if (lastСharacter == 'й'){
                return generatedRandomFatherName = generatedRandomFatherName.slice(0, generatedRandomFatherName.length -1 ) + 'евич';
            } else if (generatedRandomFatherName == 'Алексей'){
                return generatedRandomFatherName = generatedRandomFatherName.slice(0, generatedRandomFatherName.length -1) + 'ович';
            } else {
                return generatedRandomFatherName = generatedRandomFatherName + 'ович';
            }
            
        } else {
            if (lastСharacter == 'й'){
                return generatedRandomFatherName = generatedRandomFatherName.slice(0, generatedRandomFatherName.length -1) + 'евна';
            } else if (generatedRandomFatherName == 'Алексей'){
                return generatedRandomFatherName = generatedRandomFatherName.slice(0, generatedRandomFatherName.length -1) + 'овна';
            } else {
                return generatedRandomFatherName = generatedRandomFatherName + 'овна';
            }
        }

    },

    randomProfession: function() {

        return generatedRandomGender == this.GENDER_MALE ? this.randomValue(this.ProfessionMaleJson) : this.randomValue(this.ProfessionFemaleJson)

    },

    getPerson: function () {

        this.person = {};
        this.person.gander = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.firstSurname = this.randomSurname();
        this.person.dateOfBirth = this.randomDateOfBirth();
        this.person.fatherName = this.randomFatherName();
        this.person.profession = this.randomProfession();
        
        
        return this.person;
    }
};

document.getElementById('clearData').addEventListener('click', function (){

    document.getElementById('genderOutput').innerText = '';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('dateOfBirthOutput').innerText = '';
    document.getElementById('fatherNameOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';

})

document.getElementById('generateData').addEventListener('click', function(){

    let initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gander;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.firstSurname;
    document.getElementById('dateOfBirthOutput').innerText = initPerson.dateOfBirth;
    document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
    document.getElementById('professionOutput').innerText = initPerson.profession;

})