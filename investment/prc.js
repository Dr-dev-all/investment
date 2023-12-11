const userSideBar = [
  { name: "Recents", url: "./", id: 1, pager: "home" },
  { name: "Dashboard", url: "./dashboard", id: 2, pager: "dash" },
  { name: "History", url: "./history", id: 3, pager: "History" },
  { name: "Investors", url: "./investors", id: 4, pager: "investors" },
  { name: "Settings", url: "./setting", id: 5, pager: "Setting" },
  { name: "feedbacks", url: "./learn", id: 6, pager: "Learn" },
  { name: "Logout", url: "./logout", id: 7, pager: "Logout" },
  { name: "", url: "./adminedituser", id: 8, pager: "AdminEditUser" },
];

const data = userSideBar.map((d) => console.log(typeof d));
