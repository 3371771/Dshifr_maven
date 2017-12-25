dictwords = ["зашифровка 0 10 1 5 10 1 6 14 192 7 14 192 8 14 192 13 10 1",
	"расшифровка 0 10 1 2 14 192 3 14 192 4 14 192 5 10 1 13 10 1",
	"отправка 0 10 1 4 10 16 5 10 1 8 10 16 13 10 1 14 14 192 15 14 192 16 14 192",
	"файла 0 10 1 2 18 5 3 18 5 4 26 21 5 10 1 6 18 5 7 18 5 8 26 21 13 10 1 14 14 192 15 14 192 16 14 192",
	"aes 0 14 192 1 10 32 2 16 144 6 16 144 14 8 128 18 10 1",
	"инструкции 0 8 128 1 8 128 2 8 128 3 8 128 4 8 128 5 8 128 6 8 128 7 8 128 8 8 128 13 8 128 14 8 128 15 8 128 16 8 128 17 8 128 18 14 192",
	"aes.html 0 6 64",
	"алгоритм 1 36 248 2 18 24 3 18 24 4 18 40 6 18 24 7 18 24 8 18 40 18 10 1",
	"такой 1 10 32",
	"как 1 10 32 12 10 1",
	"des 1 18 48 3 16 144 5 14 192 7 16 144 15 8 128 18 10 1",
	"отличается 1 10 16",
	"только 1 10 16",
	"длиной 1 10 16",
	"ключа 1 18 18",
	"шифрует 1 10 16",
	"любые 1 10 16",
	"файлы 1 26 28",
	"картинки 1 10 16 12 10 2",
	"ворд 1 10 16",
	"эксель 1 10 16",
	"можно 1 18 12",
	"отправлять 1 18 9",
	"принимать 1 10 8",
	"шифрованные 1 10 8",
	"ключ 1 18 9 14 10 1",
	"для 1 26 14 12 10 2",
	"обеих 1 10 8",
	"сторон 1 10 8",
	"одни 1 10 8",
	"rsa 1 18 9 4 16 160 8 16 160 13 14 192 16 8 128 18 10 1",
	"тут 1 10 8",
	"всё 1 10 4",
	"немного 1 10 4",
	"сложнее 1 10 4",
	"во-первых 1 10 4",
	"шифровать 1 10 4 14 10 1",
	"501 1 10 4",
	"поэтому 1 10 4",
	"обычно 1 10 4",
	"используется 1 10 4",
	"паролей 1 10 2",
	"т.п 1 10 2",
	"во-вторых 1 10 2",
	"генерируются 1 10 2",
	"отправителя 1 10 2",
	"получателя 1 10 2",
	"нет 1 10 2",
	"необходимости 1 10 2",
	"свой 1 10 1",
	"это 1 10 1 12 10 1",
	"поавшате 1 10 1",
	"безопасность 1 10 1",
	"подробнне 1 10 1",
	"разделе 1 10 1 4 10 16 8 10 16",
	"какой 1 14 192 2 10 8 3 10 8 4 10 8 6 10 8 7 10 8 8 10 8 18 10 1",
	"выбрать 1 14 192 18 10 1",
	"alg.html 1 6 64",
	"выберете 2 10 16 3 10 16 4 10 32 6 10 16 7 10 16 8 10 32 17 10 1",
	"выберите 2 26 20 3 26 20 4 26 28 6 26 20 7 26 20 8 26 28",
	"файл 2 18 18 3 18 18 4 18 18 6 18 18 7 18 18 8 18 18 17 26 6",
	"пункт 2 10 16 3 10 16 4 10 8 6 10 16 7 10 16 8 10 8",
	"расшифровать 2 10 16 4 10 8",
	"верхнем 2 10 8 3 10 8 4 10 8 6 10 8 7 10 8 8 10 8",
	"правом 2 10 8 3 10 8 4 10 8 6 10 8 7 10 8 8 10 8",
	"углу 2 18 10 3 18 10 4 18 10 6 18 10 7 18 10 8 18 10",
	"будет 2 18 10 3 18 10 4 18 10 6 18 10 7 18 10 8 18 10",
	"указано 2 10 8 3 10 8 4 10 8 6 10 8 7 10 8 8 10 8",
	"используете 2 10 8 3 10 8 4 10 8 6 10 8 7 10 8 8 10 4",
	"после 2 10 8 3 10 8 4 10 4 6 10 8 7 10 8 8 10 4",
	"расшифровки 2 10 4 3 10 4",
	"появится 2 10 4 3 10 4 4 10 4 6 10 4 7 10 4 8 10 4",
	"окно 2 18 6 3 18 6 4 18 6 6 18 6 7 18 6 8 18 6",
	"сохраения 2 18 6 3 18 6 4 18 6 6 18 6 7 18 6 8 18 6",
	"что 2 10 4 3 10 4 4 10 4 6 10 4 7 10 4 8 10 4 17 10 1",
	"хотите 2 10 4 3 10 4 4 10 4 6 10 4 7 10 4 8 10 4",
	"сделать 2 10 4 3 10 4 4 10 4 6 10 4 7 10 4 8 10 4 12 10 1 17 10 1",
	"при 2 10 4 3 10 4 4 10 4 6 10 4 7 10 4 8 10 2",
	"расшифровке 2 10 2 3 10 2 4 10 2",
	"замок 2 10 2 3 10 2 4 10 2 6 10 2 7 10 2 8 10 2",
	"закрыт 2 10 2 3 10 2 6 10 2 7 10 2 8 10 2",
	"удачного 2 10 2 3 10 2 4 10 2 6 10 2 7 10 2 8 10 2",
	"сохраняется 2 10 1 3 10 1 4 10 2 6 10 1 7 10 1 8 10 1",
	"формате 2 10 1 3 10 1 4 10 1 6 10 1 7 10 1 8 10 1",
	"имяфайла_расшифрован_aes.формат 2 10 1",
	"decraes.html 2 6 64",
	"зашифровать 3 10 16 6 10 16 7 10 16 8 10 8",
	"имяфайла_расшифрован_des.формат 3 10 1",
	"decrdes.html 3 6 64",
	"подробнее 4 10 16 8 10 16",
	"кнопке 4 10 16 8 10 16",
	"сгенерировать 4 10 16 8 10 16 14 10 4",
	"ключи 4 10 16 8 10 16",
	"зашифровки 4 10 4 6 10 4 7 10 4 8 10 4",
	"открыт 4 10 2",
	"имяфайла_расшифрован_rsa.формат 4 10 1",
	"decrrsa.html 4 6 64",
	"des.html 5 6 64",
	"зашифровке 6 10 2 7 10 2 8 10 2",
	"имяфайла_зашифрован_aes.формат 6 10 1",
	"encraes.html 6 6 64",
	"имяфайла_зашифрован_des.формат 7 10 1",
	"encrdes.html 7 6 64",
	"имяфайла_зашифрован_rsa.формат 8 10 1",
	"encrrsa.html 8 6 64",
	"программе 9 10 1 12 14 192",
	"авторе 9 10 1 11 14 192",
	"сведенеия 9 14 192 11 8 128 12 8 128",
	"introduction.html 9 6 64",
	"contents 10 10 16",
	"index 10 10 16",
	"search 10 18 12",
	"enter 10 10 8 15 10 1 16 10 1",
	"one 10 10 8",
	"more 10 10 4",
	"keywords 10 10 4",
	"and 10 10 2",
	"wildcards 10 10 2",
	"are 10 10 2",
	"supported 10 10 1",
	"newproject_ftsearch.html 10 6 64",
	"автор 11 10 4",
	"этого 11 10 4",
	"приложения 11 10 2",
	"ксения 11 10 2",
	"андреевна 11 10 2",
	"студентка 11 10 1",
	"3-го 11 10 1",
	"курса 11 10 1",
	"колледжа 11 10 1",
	"псковгу 11 10 1",
	"oavtore.html 11 6 64",
	"продолжение 12 10 16",
	"создано 12 10 16",
	"рамках 12 10 8",
	"выполнения 12 10 8",
	"курсового 12 10 8",
	"проекта 12 10 8",
	"изучению 12 10 8",
	"основ 12 10 8",
	"криптографии 12 10 4",
	"также 12 10 4",
	"внесено 12 10 4",
	"несколько 12 10 4",
	"необязательных 12 10 4",
	"фичей 12 10 2",
	"музыка 12 10 2",
	"просто 12 10 2",
	"себя 12 10 2 14 10 1",
	"интереса 12 10 1",
	"узнать 12 10 1",
	"классно 12 10 1",
	"вышло 12 10 1",
	"oprog.html 12 6 64",
	"rsa.html 13 6 64",
	"отправить 14 10 2",
	"ключом 14 10 2",
	"скоприровать 14 10 1",
	"sendaes.html 14 6 64",
	"topic 15 10 1 16 10 1",
	"text 15 10 1 16 10 1",
	"here 15 10 1 16 10 1",
	"senddes.html 15 6 64",
	"sendrsa.html 16 6 64",
	"большой 17 10 4",
	"зашифрован 17 18 3",
	"др.алгоритмом 17 10 1",
	"варианты 17 14 192",
	"ошибок 17 14 192",
	"topic.html 17 6 64",
	"topic3.html 18 6 64"];
skipwords = ["and,or,the,it,is,an,on,we,us,to,of,"];
var STR_FORM_SEARCHFOR = "Search for:";
var STR_FORM_SUBMIT_BUTTON = "Submit";
var STR_FORM_RESULTS_PER_PAGE = "Results per page:";
var STR_FORM_MATCH = "Match:";
var STR_FORM_ANY_SEARCH_WORDS = "any search words";
var STR_FORM_ALL_SEARCH_WORDS = "all search words";
var STR_NO_QUERY = "No search query entered.";
var STR_RESULTS_FOR = "Search results for:";
var STR_NO_RESULTS = "No results";
var STR_RESULT = "result";
var STR_RESULTS = "results";
var STR_PHRASE_CONTAINS_COMMON_WORDS = "Your search query contained too many common words to return the entire set of results available. Please try again with a more specific query for better results.";
var STR_SKIPPED_FOLLOWING_WORDS = "The following word(s) are in the skip word list and have been omitted from your search:";
var STR_SKIPPED_PHRASE = "Note that you can not search for exact phrases beginning with a skipped word";
var STR_SUMMARY_NO_RESULTS_FOUND = "No results found.";
var STR_SUMMARY_FOUND_CONTAINING_ALL_TERMS = "found containing all search terms.";
var STR_SUMMARY_FOUND_CONTAINING_SOME_TERMS = "found containing some search terms.";
var STR_SUMMARY_FOUND = "found.";
var STR_PAGES_OF_RESULTS = "pages of results.";
var STR_POSSIBLY_GET_MORE_RESULTS = "You can possibly get more results searching for";
var STR_ANY_OF_TERMS = "any of the terms";
var STR_DIDYOUMEAN = "Did you mean:";
var STR_SORTEDBY_RELEVANCE = "Sorted by relevance";
var STR_SORTBY_RELEVANCE = "Sort by relevance";
var STR_SORTBY_DATE = "Sort by date";
var STR_SORTEDBY_DATE = "Sorted by date";
var STR_RESULT_TERMS_MATCHED = "Terms matched:";
var STR_RESULT_SCORE = "Score:";
var STR_RESULT_URL = "URL:";
var STR_RESULT_PAGES = "Result Pages:";
var STR_RESULT_PAGES_PREVIOUS = "Previous";
var STR_RESULT_PAGES_NEXT = "Next";
var STR_FORM_CATEGORY = "Category:";
var STR_FORM_CATEGORY_ALL = "All";
var STR_RESULTS_IN_ALL_CATEGORIES = "in all categories";
var STR_RESULTS_IN_CATEGORY = "in category";
var STR_POWEREDBY = "Search powered by";
var STR_MORETHAN = "More than";
var STR_ALL_CATS = "all categories";
var STR_CAT_SUMMARY = "Refine your search by category:";
var STR_OR = "or";
var STR_RECOMMENDED = "Recommended links";
var STR_SEARCH_TOOK = "Search took";
var STR_SECONDS = "seconds";
var STR_MAX_RESULTS = "You have requested more results than served per query. Please try again with a more precise query.";
