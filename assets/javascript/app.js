/**
 * Created by denisemayele on 22/05/2017.
 */

$(function() {
    $('.reponse').hide();


    //Test the answers
    $('a').hover(
        function() {
            $('.reponse').show();
            if ($(':radio[id="r1"]:checked').val()) {
                $('#img1').attr('src', 'correct.png');
                $('#reponse1').css('color', 'green');
            }
            else {
                $('#img1').attr('src', 'wrong.png');
                $('#reponse1').css('color', 'red');
            }
            if ($(':radio[id="r4"]:checked').val()) {
                $('#img2').attr('src', 'correct.png');
                $('#reponse2').css('color', 'green');
            }
            else {
                $('#img2').attr('src', 'wrong.png');
                $('#reponse2').css('color', 'red');
            }
            if ($(':radio[id="r8"]:checked').val()) {
                $('#img3').attr('src', 'correct.png');
                $('#reponse3').css('color', 'green');
            }
            else {
                $('#img3').attr('src', 'wrong.png');
                $('#reponse3').css('color', 'red');
            }
        },
        function() {
            $('.reponse').hide();
            $('img').each(function() {
                $(this).attr('src', 'question.png');
            });
        }

    );
});

//var questions = [$q1, $q2, $q3, $q4, $q5];
// var answers = [[$q1Correct, $q1Wrong], [$q2Correct, $q2Wrong], [$q3Correct, $q3Wrong], [$q4Correct, $q4Wrong], [$q5Correct, $q5Wrong]];



// 	var questions = [
//
// 		{
// 		question: "A traditional dish of blood and cooked meat in northern Vietnamese cuisine.",
// 		choices: [Ham yuhet,Tiet canh,Nem,Nuoc Mam],
// 		correctAnswer: 1,
//         tip: The most popular is tiet canh vịt made from freshly killed duck blood and duck meat
// 	},
// 		{
// 		question: "Which country is the Tom Kati Kai Mod Daeng a coconut milk soup and ant eggs?",
// 		choices: [Mexico,Alaska,Russia,Thailand],
// 		correctAnswer: 3,
//         tip:
// 	},
// 		{
// 		question: "",
// 		choices: [],
// 		correctAnswer: ,
//         tip:
// 	},
// 		{
// 		question: "",
// 		choices: [],
// 		correctAnswer: ,
//         tip:
// 	}];
// });