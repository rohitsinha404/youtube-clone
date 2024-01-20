import React from "react";
import { FaUser } from "react-icons/fa";

const commentsData = [
  {
    name: "Raj",
    text: "This React tutorial is awesome! Thanks for sharing!",
    replies: [
      {
        name: "Rahul",
        text: "I agree, Raj! React is so powerful.",
        replies: [
          {
            name: "Amit",
            text: "Absolutely! I learned a lot from this video.",
            replies: [
              {
                name: "Priya",
                text: "The explanation on state management was superb.",
                replies: [
                  {
                    name: "Kavita",
                    text: "I struggled with state at first, but it's much clearer now.",
                    replies: [
                      {
                        name: "Raj",
                        text: "That's great, Kavita! Practice makes perfect.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Sonia",
                text: "I'm still getting the hang of React. Any tips for beginners?",
                replies: [
                  {
                    name: "Amit",
                    text: "Start with the basics, Sonia. Understanding JSX is key!",
                    replies: [],
                  },
                  {
                    name: "Raj",
                    text: "Also, build small projects to apply what you learn.",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Kavita",
            text: "Hello React community! What do you think about the new features in React 18?",
            replies: [
              {
                name: "Raj",
                text: "Excited to try them out! Especially the automatic batching.",
                replies: [
                  {
                    name: "Amit",
                    text: "Yes, the concurrent mode seems promising too.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Sonia",
        text: "Just implemented React Router in my project. It's amazing!",
        replies: [
          {
            name: "Rahul",
            text: "Nice one, Sonia! Routing in React is a game-changer.",
            replies: [
              {
                name: "Priya",
                text: "How did you find working with nested routes?",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Rahul",
        text: "Anyone here working with React Native?",
        replies: [
          {
            name: "Amit",
            text: "I've dabbled in React Native. It's a whole new world!",
            replies: [
              {
                name: "Raj",
                text: "The idea of cross-platform development is fascinating.",
                replies: [
                  {
                    name: "Priya",
                    text: "But styling in React Native can be a bit tricky sometimes.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Priya",
    text: "Just attended a React meetup. It's great connecting with fellow developers!",
    replies: [
      {
        name: "Raj",
        text: "Meetups are fantastic! Networking and learning go hand in hand.",
        replies: [
          {
            name: "Sonia",
            text: "Any recommendations for online React communities?",
            replies: [
              {
                name: "Amit",
                text: "Check out the Reactiflux Discord. It's very active!",
                replies: [
                  {
                    name: "Kavita",
                    text: "Thanks, Amit! I'll join right away.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Raj",
    text: "This React tutorial is awesome! Thanks for sharing!",
    replies: [
      {
        name: "Rahul",
        text: "I agree, Raj! React is so powerful.",
        replies: [
          {
            name: "Amit",
            text: "Absolutely! I learned a lot from this video.",
            replies: [
              {
                name: "Priya",
                text: "The explanation on state management was superb.",
                replies: [
                  {
                    name: "Kavita",
                    text: "I struggled with state at first, but it's much clearer now.",
                    replies: [
                      {
                        name: "Raj",
                        text: "That's great, Kavita! Practice makes perfect.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Sonia",
                text: "I'm still getting the hang of React. Any tips for beginners?",
                replies: [
                  {
                    name: "Amit",
                    text: "Start with the basics, Sonia. Understanding JSX is key!",
                    replies: [],
                  },
                  {
                    name: "Raj",
                    text: "Also, build small projects to apply what you learn.",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Kavita",
            text: "Hello React community! What do you think about the new features in React 18?",
            replies: [
              {
                name: "Raj",
                text: "Excited to try them out! Especially the automatic batching.",
                replies: [
                  {
                    name: "Amit",
                    text: "Yes, the concurrent mode seems promising too.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Sonia",
        text: "Just implemented React Router in my project. It's amazing!",
        replies: [
          {
            name: "Rahul",
            text: "Nice one, Sonia! Routing in React is a game-changer.",
            replies: [
              {
                name: "Priya",
                text: "How did you find working with nested routes?",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Rahul",
        text: "Anyone here working with React Native?",
        replies: [
          {
            name: "Amit",
            text: "I've dabbled in React Native. It's a whole new world!",
            replies: [
              {
                name: "Raj",
                text: "The idea of cross-platform development is fascinating.",
                replies: [
                  {
                    name: "Priya",
                    text: "But styling in React Native can be a bit tricky sometimes.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Priya",
    text: "Just attended a React meetup. It's great connecting with fellow developers!",
    replies: [
      {
        name: "Raj",
        text: "Meetups are fantastic! Networking and learning go hand in hand.",
        replies: [
          {
            name: "Sonia",
            text: "Any recommendations for online React communities?",
            replies: [
              {
                name: "Amit",
                text: "Check out the Reactiflux Discord. It's very active!",
                replies: [
                  {
                    name: "Kavita",
                    text: "Thanks, Amit! I'll join right away.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Raj",
    text: "This React tutorial is awesome! Thanks for sharing!",
    replies: [
      {
        name: "Rahul",
        text: "I agree, Raj! React is so powerful.",
        replies: [
          {
            name: "Amit",
            text: "Absolutely! I learned a lot from this video.",
            replies: [
              {
                name: "Priya",
                text: "The explanation on state management was superb.",
                replies: [
                  {
                    name: "Kavita",
                    text: "I struggled with state at first, but it's much clearer now.",
                    replies: [
                      {
                        name: "Raj",
                        text: "That's great, Kavita! Practice makes perfect.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Sonia",
                text: "I'm still getting the hang of React. Any tips for beginners?",
                replies: [
                  {
                    name: "Amit",
                    text: "Start with the basics, Sonia. Understanding JSX is key!",
                    replies: [],
                  },
                  {
                    name: "Raj",
                    text: "Also, build small projects to apply what you learn.",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Kavita",
            text: "Hello React community! What do you think about the new features in React 18?",
            replies: [
              {
                name: "Raj",
                text: "Excited to try them out! Especially the automatic batching.",
                replies: [
                  {
                    name: "Amit",
                    text: "Yes, the concurrent mode seems promising too.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Sonia",
        text: "Just implemented React Router in my project. It's amazing!",
        replies: [
          {
            name: "Rahul",
            text: "Nice one, Sonia! Routing in React is a game-changer.",
            replies: [
              {
                name: "Priya",
                text: "How did you find working with nested routes?",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Rahul",
        text: "Anyone here working with React Native?",
        replies: [
          {
            name: "Amit",
            text: "I've dabbled in React Native. It's a whole new world!",
            replies: [
              {
                name: "Raj",
                text: "The idea of cross-platform development is fascinating.",
                replies: [
                  {
                    name: "Priya",
                    text: "But styling in React Native can be a bit tricky sometimes.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Priya",
    text: "Just attended a React meetup. It's great connecting with fellow developers!",
    replies: [
      {
        name: "Raj",
        text: "Meetups are fantastic! Networking and learning go hand in hand.",
        replies: [
          {
            name: "Sonia",
            text: "Any recommendations for online React communities?",
            replies: [
              {
                name: "Amit",
                text: "Check out the Reactiflux Discord. It's very active!",
                replies: [
                  {
                    name: "Kavita",
                    text: "Thanks, Amit! I'll join right away.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex gap-3 rounded-lg  items-center my-3">
      <FaUser className="text-3xl " />
      <div className="flex flex-col">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((c, index) => (
    <div className="">
      <Comment key={index} data={c} />
      <div className="pl-5 border-l">
        <CommentList comments={c.replies} />
      </div>
      <div>
        <br></br>
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="my-3 ml-10 ">
      <h1 className="text-2xl font-semibold mb-3">Comments : </h1>

      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
