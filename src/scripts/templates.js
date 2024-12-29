import { projects, reviews } from "./data.js";

const projectsUl = document.querySelector("#projects ul");
const templateProject = document.querySelector(
  '[data-template="project-card"]',
);

projects.forEach((project) => {
  const card = templateProject.content.cloneNode(true);
  const image = card.querySelector("img");
  const title = card.querySelector("h4");
  const description = card.querySelector("p");
  const link = card.querySelector("a");

  image.src = project.image.src;
  image.alt = project.image.alt;

  title.textContent = project.title;
  description.textContent = project.description;

  link.href = project.link;

  projectsUl.appendChild(card);
});

const reviewsUl = document.querySelector("#reviews ul");
const templateReview = document.querySelector('[data-template="review-card"]');

reviews.forEach((review) => {
  const card = templateReview.content.cloneNode(true);
  const image = card.querySelector("img");
  const name = card.querySelector("p");
  const reviewText = card.querySelector("blockquote");

  image.src = review.image.src;
  image.alt = review.image.alt;

  name.textContent = review.name;
  reviewText.textContent = review.review;

  reviewsUl.appendChild(card);
});
