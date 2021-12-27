let form = document.querySelector('#dialog__form');
let input = document.querySelector('#dialog__input');
let button = document.querySelector('#dialog__button');
let messanger = document.querySelector('#dialog__messanger');

form.addEventListener('submit', handleForm);

function handleForm() {
	if (input.value != '') {
		messanger.innerHTML += `<div class="dialog__message question">${input.value}</div>`;
		let [answer, photo] = getAnswer(input.value);
		messanger.innerHTML += `<div class="dialog__message answer">${answer}</div>`;
		photo.forEach(element => {
			messanger.innerHTML += element;
		});
		messanger.scrollTop = 99999;

		utterance = new SpeechSynthesisUtterance(answer);
		speechSynthesis.cancel();
		speechSynthesis.speak(utterance);
	}
	input.value = '';
}

input.addEventListener('click', inputClick, false);

function inputClick() {
	speechSynthesis.cancel();
}

button.addEventListener('mouseover', buttonOver, false);
button.addEventListener('mouseout', buttonOut, false);
button.addEventListener('click', buttonClick, false);

function buttonOver() {
	button.classList.add('dialog__button-hover');
}

function buttonOut() {
	button.classList.remove('dialog__button-hover');
}

function buttonClick() {
	button.classList.add('dialog__button-listen');

	speechSynthesis.cancel();

	let recognizer = new webkitSpeechRecognition();
	recognizer.interimResults = true;
	recognizer.lang = 'ru-Ru';
	recognizer.on;
	recognizer.onresult = function (event) {
		let result = event.results[event.resultIndex];
		if (result.isFinal) {
			input.value = result[0].transcript;
			button.classList.remove('dialog__button-listen');
			handleForm();
		} else {
			input.value = result[0].transcript;
		}
	};
	recognizer.onaudioend = function (event) {
		button.classList.remove('dialog__button-listen');
	};
	recognizer.start();
}

let knowledge = [
	[
		'осциллограф',
		'- это',
		'прибор, предназначенный для исследования амплитудных и временных параметров электрического сигнала, подаваемого на его вход, и наглядно отображаемого непосредственно на экране либо регистрируемого на фотоленту',
		'<img class="dialog__image" src="images/slider/slider-3.jpg"/>',
	],
	[
		'магазин сопротивлений',
		'- это',
		'переменный резистор с очень точным выставлением номинала сопротивления',
		'<img class="dialog__image" src="images/slider/slider-6.jpg"/>',
	],
	[
		'генератор сигналов',
		'- это',
		'устройство, позволяющее производить сигнал определённой природы, имеющий заданные характеристики. Генераторы широко используются для преобразования сигналов, для измерений и в других областях. Состоит из источника и формирователя',
		'<img class="dialog__image" src="images/slider/slider-4.jpg"/>',
	],
	[
		'кассета с колебательным контуром',
		'- это',
		'электрическая цепь, содержащая катушку индуктивности, конденсатор и источник электрической энергии. При последовательном соединении элементов цепи колебательный контур называется последовательным, при параллельном — параллельным',
		'<img class="dialog__image" src="images/slider/slider-5.jpg"/>',
	],
	[
		'колебательный контур',
		'- это',
		'электрическая цепь, содержащая катушку индуктивности, конденсатор и источник электрической энергии. При последовательном соединении элементов цепи колебательный контур называется последовательным, при параллельном — параллельным',
	],
	[
		'установка лабораторной работы',
		'работает',
		'следующим образом',
		'<video class="dialog__image" src="video/simulator.mp4" controls></video>',
	],
	[
		'амплитуда',
		'- это',
		'максимальное значение смещения или изменения переменной величины от среднего значения при колебательном или волновом движении. Неотрицательная скалярная величина, размерность которой совпадает с размерностью определяемой физической величины',
	],
	[
		'сила лоренца',
		'- это',
		' сила, с которой электромагнитное поле, согласно классической (неквантовой) электродинамике, действует на точечную заряженную частицу',
	],
	[
		'электрический заряд',
		'- это',
		' физическая скалярная величина, определяющая способность тел быть источником электромагнитных полей и принимать участие в электромагнитном взаимодействии',
	],
	[
		'напряженность электрического поля',
		'- это',
		' векторная физическая величина, характеризующая электрическое поле в данной точке',
	],
	[
		'магнитная индукция',
		'- это',
		' векторная физическая величина, являющаяся силовой характеристикой магнитного поля, а именно характеристикой его действия на движущиеся заряженные частицы и на обладающие магнитным моментом тела',
	],
	[
		'магнитное поле',
		'- это',
		' поле, действующее на движущиеся электрические заряды и на тела, обладающие магнитным моментом, независимо от состояния их движения; магнитная составляющая электромагнитного поля',
	],
	[
		'электрическое поле',
		'- это',
		' физическое поле, которое окружает каждый электрический заряд и оказывает силовое воздействие на все другие заряды, притягивая или отталкивая их',
	],
	[
		'конденсатор',
		'- это',
		'двухполюсник с постоянным или переменным значением ёмкости и малой проводимостью; устройство для накопления заряда и энергии электрического поля',
	],
	[
		'частица',
		'- это',
		'небольшой локализованный объект, которому можно приписать несколько физических или химических свойств, таких как объем, плотность или масса',
	],
	[
		'электрон',
		'- это',
		' стабильная отрицательно заряженная элементарная частица',
	],
	[
		'молекула',
		'- это',
		'электрически нейтральная частица, образованная из двух или более связанных ковалентными связями атомов',
	],
	[
		'частота',
		'- это',
		'физическая величина, характеристика периодического процесса, равна количеству повторений или возникновения событий (процессов) в единицу времени',
	],
	[
		'установка',
		'выглядит',
		'следующим образом',
		'<img class="dialog__image" src="images/slider/slider-1.jpg"/>',
	],
	['период', 'измеряется', 'в секундах'],
	['частота', 'измеряется', 'в герцах'],
	[
		'осциллографы',
		'бывают',
		'аналоговыми, цифровыми и аналоготовыми с цифровой обработкой сигнала',
	],
	[
		'график',
		'- это',
		'множество точек, у которых абсциссы являются допустимыми значениями аргумента x, а ординаты - соответствующими значениями функции y',
	],
	['напряжение', 'измеряется', 'в вольтах'],
	['время', 'измеряется', 'в секундах'],
	[
		'график',
		'видим',
		'потому что Молекулы люминофора преобразуют кинетическую энергию электронов, которую они отдают при столкновении с поверхностью экрана, в энергию электромагнитного излучения видимого диапазона',
	],
	['цвет графика', 'обычно', 'зеленый либо голубой'],
	[
		'осциллограф',
		'измеряет',
		'амплитудные и временные параметры электрического сигнала',
	],
	[
		'осциллограф',
		'применяется',
		'в электротехнике, ремонте автомобилей, либо каких-нибудь электрических приборов',
	],
	[
		'цена деления',
		'- это',
		'значение величины, которое соответствует разности двух ближайших отметок на этой шкале',
	],
	[
		'затухающие колебания',
		'- это',
		'колебания, энергия которых уменьшается с течением времени. Свободные колебания любого осциллятора рано или поздно затухают и прекращаются. Поэтому на практике обычно имеют дело с затухающими колебаниями',
	],
	[
		'электромагнитные колебания',
		'- это',
		'периодически изменяющиеся во времени взаимосвязанные электрическое и магнитное поля',
	],
	[
		'катушка индуктивности',
		'- это',
		'винтовая, спиральная или винтоспиральная катушка из свёрнутого изолированного проводника, обладающая значительной индуктивностью при относительно малой ёмкости и малом активном сопротивлении. Как следствие, при протекании через катушку переменного электрического тока наблюдается её значительная инерционность',
	],
	[
		'резистор',
		'- это',
		'пассивный элемент электрических цепей, обладающий определённым или переменным значением электрического сопротивления, предназначенный для линейного преобразования силы тока в напряжение и напряжения в силу тока, ограничения тока, поглощения электрической энергии и др',
	],
	[
		'сопротивление',
		'- это',
		'физическая величина, характеризующая свойство проводника препятствовать прохождению электрического тока и равная отношению напряжения на концах проводника к силе тока, протекающего по нему',
	],
	['сопротивление', 'измеряется', 'в Омах'],
	[
		'источник тока',
		'- это',
		'элемент, двухполюсник, сила тока через который не зависит от напряжения на его зажимах. Используются также термины генератор тока и идеальный источник тока',
	],
	[
		'электрический ток',
		'- это',
		'направленное движение частиц или квазичастиц — носителей электрического заряда. Последующее электромагнитное взаимодействие между заряженными частицами осуществляется не прямо, а посредством электромагнитного поля',
	],
	[
		'правило ленца',
		'гласит',
		'индукционный ток всегда имеет такое направление, что он ослабляет действие причины, возбуждающей этот ток',
	],
	[
		'сила тока',
		'- это',
		'скалярная физическая величина, равная отношению электрического заряда dQ, прошедшего через определённую поверхность за бесконечно малый промежуток времени dt, к длительности этого промежутка',
	],
	[
		'дифференциальное уравнение',
		'- это',
		'уравнение, в которое входят производные функции и могут входить сама функция, независимая переменная и параметры. Порядок входящих в уравнение производных может быть различен',
	],
	[
		'коэффициент затухания',
		'- это',
		'физическая величина, обратная времени, в течение которого амплитуда уменьшается в е раз',
	],
	[
		'циклическая частота',
		'- это',
		'скалярная физическая величина, мера частоты вращательного или колебательного движения. В случае вращательного движения угловая частота равна модулю вектора угловой скорости',
	],
	[
		'угловая частота',
		'- это',
		'скалярная физическая величина, мера частоты вращательного или колебательного движения. В случае вращательного движения угловая частота равна модулю вектора угловой скорости',
	],
	[
		'апериодические колебания',
		'- это',
		'когда сопротивление становится равным критическому, то круговая частота обращается в нуль, колебания прекращаются',
	],
	[
		'логарифмический декремент затухания',
		'- это',
		'безразмерная физическая величина, описывающая уменьшение амплитуды колебательного процесса и равная натуральному логарифму отношения двух последовательных амплитуд колеблющейся величины x в одну и ту же сторону',
	],
	[
		'добротность',
		'- это',
		'параметр колебательной системы, определяющий ширину резонанса и характеризующий, во сколько раз запасы энергии в системе больше, чем потери энергии за время изменения фазы на 1 радиан',
	],
	[
		'генрих герц',
		'- это',
		'электромагнитную теорию света Джеймса Максвелланемецкий физик. Окончил Берлинский университет, где его учителями были Герман фон Гельмгольц и Густав Кирхгоф. С 1885 по 1889 год был профессором физики Университета в Карлсруэ. С 1889 года — профессор физики университета в Бонне',
	],
	[
		'амплитуда напряжения',
		'- это',
		'напряжение U между максимальным и минимальным напряжением сигнала без учета выбросов',
	],
	[
		'критическое сопротивление',
		'- это',
		'значение сопротивления контура, при котором колебательный процесс становится апериодическим',
	],
	[
		'собственная частота',
		'- это',
		'любая из частот свободных колебаний линейной системы',
	],
	[
		'даниил вощук',
		'- это',
		'гений фронтенда, создатель этого сайта и вообще всей курсовой работы. Короче офигенный чел',
	],
	[
		'колебательный контур',
		'состоит',
		'из конденсатора C, катушки индуктивности L и магазина сопротивлений Rм',
	],
	[
		'конденсатор',
		'заряжается',
		'под воздействием периодически повторяющихся прямоугольных импульсов напряжения, которые вырабатываются генератором',
	],
	[
		'импульс',
		'- это',
		'векторная физическая величина, являющаяся мерой механического движения тела. В классической механике импульс тела равен произведению массы этого тела на его скорость, направление импульса совпадает с направлением вектора скорости',
	],
	[
		'импульс',
		'измеряется',
		'в Международной системе единиц в килограммах на метр в секунду (кг·м/с)',
	],
	[
		'схема установки',
		'выглядит',
		'следующим образом',
		'<img class="dialog__image" src="images/theory/a1.png"/>',
	],
	[
		'график',
		'выглядит',
		'следующим образом',
		'<img class="dialog__image" src="images/theory/a2.png"/>',
	],
	[
		'закон джоуля-ленца',
		'- это',
		'физический закон, дающий количественную оценку теплового действия электрического тока. Установлен в 1841 году Джеймсом Джоулем и независимо от него в 1842 году Эмилием Ленцем',
		'<img class="dialog__image" src="images/theory/jl_law.jpg"/>',
	],
	[
		'джеймс джоуль',
		'- это',
		'английский физик, внёсший значительный вклад в становление термодинамики. Обосновал на опытах закон сохранения энергии. Установил закон, определяющий тепловое действие электрического тока. Вычислил скорость движения молекул газа и установил её зависимость от температуры',
	],
];

// псевдоокончания сказуемых (глаголов, кратких причастий и прилагательных )
let endings = [
	['ет', '(ет|ут|ют)'],
	['ут', '(ет|ут|ют)'],
	['ют', '(ет|ут|ют)'], // 1 спряжение
	['ит', '(ит|ат|ят)'],
	['ат', '(ит|ат|ят)'],
	['ят', '(ит|ат|ят)'], // 2 спряжение
	['ется', '(ет|ут|ют)ся'],
	['утся', '(ет|ут|ют)ся'],
	['ются', '(ет|ут|ют)ся'], // 1 спряжение, возвратные
	['ится', '(ит|ат|ят)ся'],
	['атся', '(ит|ат|ят)ся'],
	['ятся', '(ит|ат|ят)ся'], // 2 спряжение, возвратные
	['ен', 'ен'],
	['ена', 'ена'],
	['ено', 'ено'],
	['ены', 'ены'], // краткие прилагательные
	['ан', 'ан'],
	['ана', 'ана'],
	['ано', 'ано'],
	['аны', 'аны'], // краткие прилагательные
	['жен', 'жен'],
	['жна', 'жна'],
	['жно', 'жно'],
	['жны', 'жны'], // краткие прилагательные
	['такое', '- это'],
	['такой', '- это'],
]; // для вопроса "что такое X?" ответ - "X - это ..."

// черный список слов, распознаваемых как сказуемые по ошибке
let blacklist = ['замена', 'замены', 'атрибут', 'маршрут', 'член', 'нет'];

function getEnding(word) {
	// проверка по черному списку
	if (blacklist.indexOf(word) !== -1) return -1;
	// перебор псевдоокончаний
	for (let j = 0; j < endings.length; j++) {
		// проверка, оканчивается ли i-ое слово на j-ое псевдоокончание
		if (word.substring(word.length - endings[j][0].length) == endings[j][0]) {
			return j; // возврат номера псевдоокончания
		}
	}
	return -1;
}

// функция, которая делает первую букву большой
function big1(str) {
	return str[0].toUpperCase() + str.slice(1);
}

// главная функция, обрабатывающая запросы клиентов
function getAnswer(question) {
	txt = question.toLowerCase().replace(/[*_#?\'",.!()[\]\\/]/g, '');
	// массив слов и знаков препинания
	let words = txt.split(' ');
	// флаг, найден ли ответ
	let result = false;
	// формируемый функцией ответ на вопрос
	let answer = [];
	answer[0] = '';
	answer[1] = new Array([]);
	// перебор слов
	for (let i = 0; i < words.length; i++) {
		// поиск номера псевдоокончания
		let ending = getEnding(words[i]);

		// если псевдоокончание найдено – это сказуемое, подлежащее в вопросе после него
		if (ending >= 0) {
			// ТОЧНЫЙ ПОИСК
			let subject_array = words.slice(i + 1);
			let subject_text = subject_array.join(' ');
			for (let j = 0; j < knowledge.length; j++)
				if (
					((words[i] == knowledge[j][1] || // точное совпадение сказуемого
						words[i].substring(0, words[i].length - endings[ending][0].length) +
							endings[ending][1] ==
							knowledge[j][1]) && // совпадение сказуемого с подстановкой (такое ->- это)
						subject_text == knowledge[j][0]) ||
					subject_text == knowledge[j][2]
				) {
					// совпадение подлежащего
					// создание простого предложения из семантической связи
					answer[0] += big1(
						knowledge[j][0] +
							' ' +
							knowledge[j][1] +
							' ' +
							knowledge[j][2] +
							'.<br/>'
					);
					if (knowledge[j][3]) answer[1].push(knowledge[j][3]);
					result = true;
					return answer;
				}
			if (result == false) {
				// ПОИСК С ПОМОЩЬЮ РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ
				// замена псевдоокончания на набор возможных окончаний
				words[i] =
					words[i].substring(0, words[i].length - endings[ending][0].length) +
					endings[ending][1];
				// создание регулярного выражения для поиска по сказуемому из вопроса
				let predicate = new RegExp(words[i]);
				// для кратких прилагательных захватываем следующее слово
				if (endings[ending][0] == endings[ending][1]) {
					predicate = new RegExp(words[i] + ' ' + words[i + 1]);
					i++;
				}
				let subject_array = words.slice(i + 1);
				// создание регулярного выражения для поиска по подлежащему из вопроса
				// из слов подлежащего выбрасываем короткие предлоги (периметр у квадрата = периметр квадрата)
				for (let j = 0; j < subject_array.length; j++) {
					if (subject_array[j].length < 3) {
						subject_array.splice(j);
						j--;
					}
				}
				let subject_string = subject_array.join('.*');
				// только если в послежащем больше трех символов
				if (subject_string.length > 3) {
					let subject = new RegExp('.*' + subject_string + '.*');
					// поиск совпадений с шаблонами среди связей семантической сети
					for (let j = 0; j < knowledge.length; j++) {
						if (
							predicate.test(knowledge[j][1]) &&
							(subject.test(knowledge[j][0]) || subject.test(knowledge[j][2]))
						) {
							// создание простого предложения из семантической связи
							answer[0] += big1(
								knowledge[j][0] +
									' ' +
									knowledge[j][1] +
									' ' +
									knowledge[j][2] +
									'.<br/>'
							);
							if (knowledge[j][3]) answer[1].push(knowledge[j][3]);
							result = true;
							return answer;
						}
					}
					// если совпадений с двумя шаблонами нет
					if (result == false) {
						// поиск совпадений только с шаблоном подлежащего
						for (let j = 0; j < knowledge.length; j++) {
							if (
								subject.test(knowledge[j][0]) ||
								subject.test(knowledge[j][2])
							) {
								// создание простого предложения из семантической связи
								answer[0] += big1(
									knowledge[j][0] +
										' ' +
										knowledge[j][1] +
										' ' +
										knowledge[j][2] +
										'.<br/>'
								);
								if (knowledge[j][3]) answer[1].push(knowledge[j][3]);
								result = true;
								return answer;
							}
						}
					}
				}
			}
		}
	}
	if (!result) answer[0] = 'Ответ не найден';
	return answer;
}
