window.addEventListener('load', homeLoaded(), false);

function homeLoaded() {
    var os = new UAParser(navigator.userAgent).getOS();

    if (os.name == "Android" || os.name == "iOS") {
        document.getElementById('detected-platform').innerText = `Download for ${os.name}`;
    } else if (os.name == "Windows") {
        document.getElementById('detected-platform').innerText = `Download for ${os.name} (10 & 11)`;

        /*var classList = document.getElementById('download-button').childNodes[0].classList;
        for(let i = 0; i < classList.length; i++) {
            document.getElementById('download-button').childNodes[0].classList.remove(classList[i]);
        }
        document.getElementById('download-button').childNodes[0].classList.add("fas");
        document.getElementById('download-button').childNodes[0].classList.add("fa-x");
        document.getElementById('download-button').classList.add("disabled");
        document.getElementById('download-button').onclick = null;

        document.getElementById('detected-platform').innerHTML = `You can not download EZFN for Windows at the moment, you can <a href="http://ezfn.dev/discord">join our Discord</a> if you want the file!`;*/
    } else {
        var classList = document.getElementById('download-button').childNodes[0].classList;
        for(let i = 0; i < classList.length; i++) {
            document.getElementById('download-button').childNodes[0].classList.remove(classList[i]);
        }
        document.getElementById('download-button').childNodes[0].classList.add("fas");
        document.getElementById('download-button').childNodes[0].classList.add("fa-x");
        document.getElementById('download-button').classList.add("disabled");
        document.getElementById('download-button').onclick = null;

        document.getElementById('detected-platform').innerText = `There is no download for ${os.name} yet`;
    }

    // Slide images
    easy_background("#features-preview-image",
        {
            slide: ["https://ezfn.dev/assets/images/nft/home.png"/*, "assets/images/real/1.jpg", "assets/images/real/2.jpg", "assets/images/real/3.jpg"*/],
            delay: [2000, 2000, 2000, 2000]
        }
    );

    document.getElementById('features-preview-image').src = 'https://ezfn.dev/assets/images/invisible.png';
}

function downloadButtonClicked() {
    var os = new UAParser(navigator.userAgent).getOS();

    if (os.name == 'Windows') {
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.href = 'https://cdn.ezfn.dev/windows/setup.exe';
        link.click();
        return;
    } else if (os.name == 'Android') {
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.href = 'https://cdn.discordapp.com/attachments/925753980808732692/1051506151646310430/EZFNLauncherV2.apk';
        link.click();

        document.getElementById('tutorial-button').href = 'https://www.youtube.com/watch?v=W4TL4JFgK8M';
    }  else if (os.name == 'iOS') {
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.href = 'https://ezfn.dev/assets/launcher/EZFNLauncheriOS.mobileconfig';
        link.click();

        document.getElementById('tutorial-button').href = 'https://www.youtube.com/watch?v=W4TL4JFgK8M';
    } else {
        return;
    }

    document.getElementById('download-button').classList.add('disabled');
    document.getElementById('download-button').src = '';

    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('data-bs-toggle', 'modal');
    link.setAttribute('data-bs-target', '#downloaded-ezfn-modal');
    link.click();

    document.getElementById('download-button').classList.remove('disabled');
}