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
    createdAt: "2020-01-01T00:00:00.000Z",
  },
  {
    user: {
      id: 2,
      name: "Angela Gray",
      avatar: "avatar-angela-gray.webp",
    },
    event: "FOLLOW",
    read: false,
    createdAt: "2020-01-01T00:00:00.000Z",
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
    createdAt: "2020-01-01T00:00:00.000Z",
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
    createdAt: "2020-01-01T00:00:00.000Z",
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
    createdAt: "2020-01-01T00:00:00.000Z",
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
    createdAt: "2020-01-01T00:00:00.000Z",
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
    createdAt: "2020-01-01T00:00:00.000Z",
  },
];

export default notifications;
