document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('meditation-form');
    const audioPlayer = document.getElementById('audio-player');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get selected length and type
        const length = document.getElementById('length').value;
        const type = document.getElementById('type').value;
        const audioRec = getAudio(length, type);

        // Display audio in the audio player section
        audioPlayer.innerHTML = `
            <p><em>${audioRec[0]}</em></p>
            <audio controls>
                <source src="${audioRec[1]}" type="audio/mpeg">
            </audio>
        `;
    });
});

function getAudio(length, type) {
    const audios = ['week-1-med.mp3', 'week-2-breath.m4a', 'week-3-body-scan-10-min.mp3', 'week-3-body-scan-15-min.m4a', 'week-3-sleep.m4a', 'week-5-grateful.m4a', 'week-5-grateful-longer.m4a', 'week-6-self-compassion.m4a'];
    const messages = ['five minute breath meditation with Rebecca Schisler', 'eleven minute mindfulness of breath meditation', 'nine minute body scan meditation', 'fifteen minute body scan meditation', 'nine minute meditation for sleep', 'seven minute gratefulness through the five senses meditation', 'eighteen minute gratefulness meditation', 'seven minute self-compassion meditation'];
    var premessage = 'Enjoy this ';
    var postmessage = '.';
    var index = 0;
    if (type==='breath') {
        if (length==='1') {
            index = Math.floor(Math.random() * 2);
        } else if (length==='5') {
            index = 0;
        } else if (length==='10') {
            index = 1;
        } else if (length==='15') {
            index = Math.floor(Math.random() * 2)
            premessage = 'No recordings matched your search. Enjoy this ';
            postmessage = ' instead.';
        }
    } else if (type==='body') {
        if (length==='1') {
            index = 2 + Math.floor(Math.random() * 2);
        } else if (length==='5') {
            index = 2;
        } else {
            index = 3;
        } 
    } else if (type==='sleep') {
        index = 4;
        if (length==='10' || length==='15') {
            premessage = 'No recordings matched your search. Enjoy this ';
            postmessage = ' instead.';
        }
    } else if (type==='grat') {
        if (length==='1') {
            var index = 5 + Math.floor(Math.random() * 2);
        } else if (length==='5') {
            index = 5;
        } else if (length==='15') {
            index = 6;
        } else {
            index = 5 + Math.floor(Math.random() * 2);
            premessage = 'No recordings matched your search. Enjoy this ';
            postmessage = ' instead.';
        }
    } else if (type==='comp') {
        index = 7;
        if (length==='10' || length==='15') {
            premessage = 'No recordings matched your search. Enjoy this ';
            postmessage = ' instead.';
        }
    } else if (type==='any') {
        if (length==='1') {
            index = Math.floor(Math.random() * 7);
        } else if (length==='5') {
            var indexes = [0, 2, 4, 5, 6]
            var i = Math.floor(Math.random() * 5);
            index = indexes[i]
        } else if (length==='10') {
            var indexes = [1, 3]
            var i = Math.floor(Math.random() * 2);
            index = indexes[i]
        } else {
            index = 6;
        }
    }
    return [premessage + messages[index] + postmessage, audios[index]];
}

function openTab(tabName, event) {
    var i, tabContent, tabButtons;
    
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}