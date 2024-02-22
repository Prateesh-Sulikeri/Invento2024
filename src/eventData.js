import img1 from '../public/images/HR_Events.png';
import img2 from '../public/images/Performing_arts.png';
import img3 from '../public/images/tech_events.png';
import img4 from '../public/images/fashion_events.png';
import img5 from '../public/images/lit_events.png';
import img6 from '../public/images/media_events.png';
import img7 from '../public/images/gaming_events.png';
import img8 from '../public/images/cdc_events.png';

const eventsByType = {
  "Beauty and Talent Competitions": {
    image: img4,
    events: [
      {
        name: "Mr. and Miss Invento",
        image: "https://source.unsplash.com/400x200/?portrait",
        description: "Description of Mr. and Miss Invento. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "https://github.com/Prateesh-Sulikeri/Invento2024/blob/test__branch/src/components/EventDetails.jsx",
      },
      {
        name: "Mr and Miss Fitness",
        image: "https://source.unsplash.com/400x200/?fitness",
        description: "Description of Mr and Miss Fitness. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-mr_and_miss_fitness-registration-page",
      },
      {
        name: "Solo Fashion",
        image: "https://source.unsplash.com/400x200/?fashion",
        description: "Description of Solo Fashion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-solo_fashion-registration-page",
      },
      {
        name: "Solo Dance (Eastern)",
        image: "https://source.unsplash.com/400x200/?dance",
        description: "Description of Solo Dance (Eastern). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-solo_dance_eastern-registration-page",
      },
      {
        name: "Solo Dance (Western)",
        image: "https://source.unsplash.com/400x200/?dance",
        description: "Description of Solo Dance (Western). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-solo_dance_western-registration-page",
      },
      {
        name: "Duo Dance",
        image: "https://source.unsplash.com/400x200/?dance",
        description: "Description of Duo Dance. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-duo_dance-registration-page",
      },
      {
        name: "Instrumental Performances (Instrumental 1)",
        image: "https://source.unsplash.com/400x200/?music",
        description: "Description of Instrumental Performances (Instrumental 1). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-instrumental_performances_instrumental_1-registration-page",
      },
      {
        name: "Instrumental Performances (Instrumental 2)",
        image: "https://source.unsplash.com/400x200/?music",
        description: "Description of Instrumental Performances (Instrumental 2). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-instrumental_performances_instrumental_2-registration-page",
      },
      {
        name: "Poetry Slam",
        image: "https://source.unsplash.com/400x200/?poetry",
        description: "Description of Poetry Slam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-poetry_slam-registration-page",
      },
    ],
  },
  "Visual Arts": {
    image: img8,
    events: [
      {
        name: "Poster Presentation",
        image: "https://source.unsplash.com/400x200/?poster",
        description: "Description of Poster Presentation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-poster_presentation-registration-page",
      },
      {
        name: "Canvas Painting",
        image: "https://source.unsplash.com/400x200/?painting",
        description: "Description of Canvas Painting. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-canvas_painting-registration-page",
      },
      {
        name: "Comic Creation",
        image: "https://source.unsplash.com/400x200/?comics",
        description: "Description of Comic Creation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-comic_creation-registration-page",
      },
      {
        name: "Best Out of Waste Art Competition",
        image: "https://source.unsplash.com/400x200/?waste",
        description: "Description of Best Out of Waste Art Competition. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-best_out_of_waste_art_competition-registration-page",
      },
    ],
  },
  "Photography and Videography": {
    image: img6,
    events: [
      {
        name: "Photography Exhibition",
        image: "https://source.unsplash.com/400x200/?photography",
        description: "Description of Photography Exhibition. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-photography_exhibition-registration-page",
      },
      {
        name: "Photo Editing Contest",
        image: "https://source.unsplash.com/400x200/?editing",
        description: "Description of Photo Editing Contest. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-photo_editing_contest-registration-page",
      },
      {
        name: "Short Film Contest",
        image: "https://source.unsplash.com/400x200/?film",
        description: "Description of Short Film Contest. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-short_film_contest-registration-page",
      },
    ],
  },
  "Performing Arts": {
    image: img2,
    events: [
      {
        name: "Mock Press",
        image: "https://source.unsplash.com/400x200/?press",
        description: "Description of Mock Press. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-mock_press-registration-page",
      },
      {
        name: "Debate Competition",
        image: "https://source.unsplash.com/400x200/?debate",
        description: "Description of Debate Competition. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-debate_competition-registration-page",
      },
      {
        name: "Nukkad Natak (Street Play)",
        image: "https://source.unsplash.com/400x200/?street",
        description: "Description of Nukkad Natak (Street Play). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-nukkad_natak-registration-page",
      },
      {
        name: "Group Fashion Show",
        image: "https://source.unsplash.com/400x200/?fashion",
        description: "Description of Group Fashion Show. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-group_fashion_show-registration-page",
      },
      {
        name: "Group Dance Competition",
        image: "https://source.unsplash.com/400x200/?dance",
        description: "Description of Group Dance Competition. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-group_dance_competition-registration-page",
      },
      {
        name: "Solo Performances (excluding dance and instrumental)",
        image: "https://source.unsplash.com/400x200/?performance",
        description: "Description of Solo Performances (excluding dance and instrumental). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-solo_performances-registration-page",
      },
      {
        name: "Classical Performances",
        image: "https://source.unsplash.com/400x200/?classical",
        description: "Description of Classical Performances. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-classical_performances-registration-page",
      },
    ],
  },
  "Literary Events": {
    image: img5,
    events: [
      {
        name: "Poetry Slam",
        image: "https://source.unsplash.com/400x200/?poetry",
        description: "Description of Poetry Slam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-poetry_slam-registration-page",
      },
    ],
  },
  "Intellectual Challenges": {
    image: img3,
    events: [
      {
        name: "Quiz Competitions (Quiz 1)",
        image: "https://source.unsplash.com/400x200/?quiz",
        description: "Description of Quiz Competitions (Quiz 1). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-quiz_competitions_quiz_1-registration-page",
      },
      {
        name: "Quiz Competitions (Quiz 2)",
        image: "https://source.unsplash.com/400x200/?quiz",
        description: "Description of Quiz Competitions (Quiz 2). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-quiz_competitions_quiz_2-registration-page",
      },
    ],
  },
  "Gaming Competitions": {
    image: img7,
    events: [
      {
        name: "Valorant Tournament",
        image: "https://source.unsplash.com/400x200/?esports",
        description: "Description of Valorant Tournament. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-valorant_tournament-registration-page",
      },
      {
        name: "BGMI Tournament",
        image: "https://source.unsplash.com/400x200/?pubg",
        description: "Description of BGMI Tournament. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-bgmi_tournament-registration-page",
      },
      {
        name: "Human Foosball Tournament",
        image: "https://source.unsplash.com/400x200/?foosball",
        description: "Description of Human Foosball Tournament. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel nisi laoreet, at convallis nisl volutpat.",
        registrationLink: "link-to-human_foosball_tournament-registration-page",
      },
    ],
  },
};

export default eventsByType;
