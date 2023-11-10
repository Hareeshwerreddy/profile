Information = {
  home: {
    name: "Hareeshwer Reddy",
    job: "Web Developer",
    others: "Artiest, Gamer",
    skills: ["Web Developer", "Artiest", "Content Creator", "Gaming"],
  },
  personalInfo: {
    Name: "Hareeshwer Reddy",
    Age: 18,
    PhoneNo: "+91 96521 10895",
    City: "Hyderabad",
    email: "pandugahareeshwerreddy@gmail.com",
    Languages: ["English","Telugu"],
  },

  skills: [
"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png",
"https://seeklogo.com/resources/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
],
  education: {
    School: {
      name: "K K Reddy school",
      link: "https://www.facebook.com/KKREDDYSCHOOLTKP/",
      edu: "NUR to X",
      duration: "2007-2020",
      imglink: "https://static.vecteezy.com/system/resources/previews/008/040/272/original/school-logo-design-template-free-vector.jpg",
    },
    Inter: {
      name: "Prathibha Junior College",
      link: "https://g.co/kgs/TAsTTR",
      edu: "XI & XII",
      duration: "2020-2022",
      imglink:
        "https://logo.com/image-cdn/images/kts928pd/production/c2fcbae1ac2dcdbf24af1e394b95cde0635cbc70-731x731.png?w=1080&q=72",
    },
    College: {
      name: "Malla Reddy College of Engineering",
      link: "https://mrce.in/",
      edu: "B.Tech. Computer Science and Engineering (AI & ML)",
      duration: "2022-Present",
      imglink: "https://mrce.in/assets/resources/images/logo.png",
    },
  },
  Experience: [
    {
      name: " Youtube Shorts (hari_vam_YT Youtube Channel)",
      month: "Aug 2022 - Present",
      skillsDeveloped: "Video and Photo Editing",
      link: "https://www.youtube.com/@hari_vam_YT",
      src: "./resources/images/yt.png"
    }
  ],
};

Object.entries(Information.home).forEach(([key, value]) => {
  $(String(".home." + key)).text(value);
});
Object.entries(Information.personalInfo).forEach(([key, value]) => {
  $(".personal").append(
    "<div><p>" + key + ":" + "</p><h5>" + value + "</h5></div>"
  );
});
Information.skills.forEach((e) => {
  $(".skill").append(
    `<div><img src="${e}" alt=""></div>`
  );
});

$(String(".home.switch")).text(Information.home.skills);

Object.entries(Information.education).forEach(([key, value]) => {
  $("img." + key).attr("src", value.imglink);
  $("." + key + " h4 a").text(value.name);
  $("." + key + " h4 a").attr("href", value.link);
  $("." + key + " .edu").text(value.edu);
  $("." + key + " .duration").text(value.duration);
});

Object.entries(Information.Experience).forEach(([key, value]) => {
  $("." + key + " img").attr("src", value.imglink);
  $("." + key + " h4 a").text(value.name);
  $("." + key + " h4 a").attr("href", value.link);
  $("." + key + " .edu").text(value.edu);
  $("." + key + " .duration").text(value.duration);
});

function Experi(data) {
  return `<div><a href="${data.link}" target="_blank"><img src="${data.src}" alt=""></a><div class="move"><h4>${data.skillsDeveloped}</h4><h5>${data.name}</h5><h6>${data.month}</h6> <a href="${data.link}" target="_blank">View</a> </div></div>`;
}

Information.Experience.forEach((e) => {
  $(".exp").append(Experi(e));
});

$(".content").click(function (e) {
  $(this).toggleClass("fullscreen");
});
