export default function Lofilist() {
  let lofiData = [
    {
      name: "Particles",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
      artist: "Sleepermane x Casiio",
      id: "V9OTxxTZmDc",
      active: false,
      category: "hip-hop",
    },
    {
      name: "Into The Past",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      artist: "CYGN",
      id: "TURbeWK2wwg",
      active: false,
      category: "hip-hop",
    },
    {
      name: "Cycles",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
      artist: "SwuM",
      id: "rA56B4JyTgI",
      active: false,
      category: "hip-hop",
    },
    {
      name: "Soul Samba",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      artist: "Zmeyev",
      id: "uZ6_ISALjcQ",
      active: false,
      category: "hip-hop",
    },
    {
      name: "Sunrise Hike",
      cover:
        "https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/605072dd8914772a1df825a9_ow9bl5athaeho9m.jpg",
      artist: "Ruck P",
      id: "_ITiwPMUzho",
      active: false,
      category: "hip-hop",
    },
    {
      name: "Leafy",
      cover:
        "data:image/jpeg;base64,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",
      artist: "Josh Wells",
      id: "5-9dJW8PIXc",
      active: false,
      category: "hip-hop",
    },
    {
      name: "Hindi Lofi to Escape Reality",
      cover:
        "https://i.ytimg.com/vi/rA9OAm5zIPw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDuOxQrCWr-3s3cFStH0dc-OPouyw",
      artist: "Anshumaan",
      id: "sfCrKQFSkAQ",
      active: false,
      category: "indian",
    },
    {
      name: "Best of Bollywood Hindi lofi",
      cover:
        "https://i1.sndcdn.com/artworks-DwqyLfBPyn4uhryT-NEAicQ-t500x500.jpg",
      artist: "chill mix",
      id: "KRA26LhuTP4",
      active: false,
      category: "indian",
    },
    {
      name: "Arijit Singh Lofi ",
      cover: "https://i.ytimg.com/vi/zsCWxdjwl84/maxresdefault.jpg",
      artist: "chill mix",
      id: "dkrAGcHoL_0",
      active: false,
      category: "indian",
    },
    {
      name: "LOFI Bollywood mix to chill & relax",
      cover: "https://i.ytimg.com/vi/IOkNOrxl5Ik/maxresdefault.jpg",
      artist: "chill mix",
      id: "QqyZ-D34YK8",
      active: false,
      category: "indian",
    },
    {
      name: "Old Bollywood Lofi",
      cover:
        "https://i1.sndcdn.com/artworks-GPOYVjd2B1s4TPbU-ydKocQ-t500x500.jpg",
      artist: "chill mix",
      id: "ybTXGObVt4s",
      active: false,
      category: "indian",
    },
  ];
  return lofiData;
}
