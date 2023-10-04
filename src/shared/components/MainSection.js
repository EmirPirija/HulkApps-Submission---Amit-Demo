import React from "react";
import dogpark from "../assets/dogpic.webp";
import classes from "./MainSection.module.css";
import happydog from "../assets/happy-smiling-dog.avif";
import planepic from "../assets/airplane-flight.webp";

const MainSection = () => {
  // Function to handle the button click
  const handleOverlayButtonClick = () => {
    // logic here for what should happen when the button is clicked
  };

  return (
    <div className={classes.main}>
      <div className={classes["main-container"]}>
        <h1 className={classes.title}>TEST</h1>
        <p className={classes["main-paragraph"]}>
          Football is a family of team sports that involve, to varying degrees,
          kicking a ball to score a goal. Unqualified, the word football
          normally means the form of football that is the most popular where the
          word is used. Sports commonly called football include association
          football (known as soccer in North America, Ireland, and Australia);
          gridiron football (specifically American football or Canadian
          football); Australian rules football; rugby union and rugby league;
          and Gaelic football.[1] These various forms of football share, to
          varying degrees, common origins and are known as "football codes".
        </p>
        <h2 className={classes["main-h2"]}>Heading 2</h2>
        <p className={classes["main-paragraph-first"]}>
          There are a number of references to traditional, ancient, or
          prehistoric ball games played in many different parts of the
          world.[2][3][4] Contemporary codes of football can be traced back to
          the codification of these games at English public schools during the
          19th century.[5][6] The expansion and cultural influence of the
          British Empire allowed these rules of football to spread to areas of
          British influence outside the directly.
        </p>
        <p className={classes["main-paragraph-second"]}>
          By the end of the 19th century, distinct regional codes were already
          developing: Gaelic football, for example, deliberately incorporated
          the rules of local traditional football games in order to maintain
          their heritage.[8] In 1888, The Football League was founded in
          England, becoming the first of many professional football
          associations.
        </p>
        <p className={classes["main-paragraph-third"]}>
          The various codes of football share certain common elements and can be
          grouped into two main classes of football: carrying codes like
          American football, Canadian football, Australian football, rugby
          union, and rugby league.
        </p>
        <h6>Heading 6</h6>
        <img
          src={dogpark}
          alt="happy dog in a park"
          className={classes["dog-park"]}
        />

        <div className={classes.section}>
          <p className={classes["main-paragraph-fourth"]}>
            This is a random paragraph.
          </p>

          <div className={classes.card}>
            <p className={classes.cardContent}>This is a card.</p>
          </div>

          <p className={classes["main-paragraph-fifth"]}>
            Two teams usually have between 11 and 18 players; some variations
            that have fewer players (five or more per team) are also popular.
          </p>

          <h7>Box 1</h7>
          <p className={classes["main-paragraph-sixth"]}>
            There are conflicting explanations of the origin of the word
            "football". It is widely assumed that the word "football" (or the
            phrase "foot ball") refers to the action of the foot kicking a
            ball.[12] There is an alternative explanation, which is that
            football originally referred to a variety of games in medieval
            Europe that were played on foot.[13] There is no conclusive evidence
            for either explanation.
          </p>

          <ul className={classes.list}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>

          <div className={classes["happy-dog-container"]}>
            <img
              src={happydog}
              alt="happy dog"
              className={classes["happy-dog"]}
            />
          </div>

          <div className={classes["main-airplane-container"]}>
            <img
              src={planepic}
              alt="airplane"
              className={classes["main-airplane"]}
            />
          </div>
        </div>
        <div className={classes["main-table-container"]}>
          <table class={classes["bordered-table"]}>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
            <tr>
              <td>Row 1, Cell 1</td>
              <td>Row 1, Cell 2</td>
              <td>Row 1, Cell 3</td>
            </tr>
            <tr>
              <td>Row 2, Cell 1</td>
              <td>Row 2, Cell 2</td>
              <td>Row 2, Cell 3</td>
            </tr>
            <tr>
              <td>Row 3, Cell 1</td>
              <td>Row 3, Cell 2</td>
              <td>Row 3, Cell 3</td>
            </tr>
          </table>
        </div>
      </div>
      <button
        className={classes["overlay-button"]}
        onClick={handleOverlayButtonClick}
      >
        Get $XX
      </button>
    </div>
  );
};

export default MainSection;
