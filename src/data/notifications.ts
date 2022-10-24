import moment from "moment";

const notifications = [
  {
    user: {
      id: 1,
      name: "Mark Webber",
      avatar: "avatar-mark-webber.webp",
    },
    post: {
      id: 1,
      title: "My first tournament today!",
    },
    event: "POST_REACTION",
    read: false,
    createdAt: moment(new Date()).subtract(1, "minute").toString(),
  },
  {
    user: {
      id: 2,
      name: "Angela Gray",
      avatar: "avatar-angela-gray.webp",
    },
    event: "FOLLOW",
    read: false,
    createdAt: moment(new Date()).subtract(5, "minutes").toString(),
  },
  {
    user: {
      id: 2,
      name: "Jacob Thompson",
      avatar: "avatar-jacob-thompson.webp",
    },
    group: {
      id: 1,
      name: "Chess Club",
    },
    event: "GROUP_JOINING",
    read: false,
    createdAt: moment(new Date()).subtract(1, "day").toString(),
  },
  {
    user: {
      id: 3,
      name: "Rizky Hasanuddin",
      avatar: "avatar-rizky-hasanuddin.webp",
    },
    message: {
      id: 1,
      description:
        "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    },
    event: "MESSAGE_SENDING",
    read: true,
    createdAt: moment(new Date()).subtract(5, "days").toString(),
  },
  {
    user: {
      id: 4,
      name: "Kimberly Smith",
      avatar: "avatar-kimberly-smith.webp",
    },
    picture: {
      id: 1,
      file: "image-chess.webp",
    },
    event: "PICTURE_COMMENT",
    read: true,
    createdAt: moment(new Date()).subtract(1, "week").toString(),
  },
  {
    user: {
      id: 5,
      name: "Nathan Peterson",
      avatar: "avatar-nathan-peterson.webp",
    },
    post: {
      id: 1,
      title: "5 end-game strategies to increase your win rate",
    },
    event: "POST_REACTION",
    read: true,
    createdAt: moment(new Date()).subtract(2, "weeks").toString(),
  },
  {
    user: {
      id: 6,
      name: "Anna Kim",
      avatar: "avatar-anna-kim.webp",
    },
    group: {
      id: 1,
      name: "Chess Club",
    },
    event: "GROUP_LEAVING",
    read: true,
    createdAt: moment(new Date()).subtract(3, "weeks").toString(),
  },
];

export default notifications;
