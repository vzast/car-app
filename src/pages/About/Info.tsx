import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  background: #f4f4f9; 
  color: #333; /* Dark text for contrast */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 2em;
  color: #222;
`;

const SubHeading = styled.h3`
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  color: #444;
`;

const Paragraph = styled.p`
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-family: "Arial", sans-serif;
`;

function Info() {
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <Heading>Welcome to the World of Gaming</Heading>
            <Paragraph>
              The gaming industry has seen exponential growth, evolving into one
              of the most influential and lucrative sectors in the entertainment
              world. With advancements in technology, games have become more
              immersive and visually stunning, offering experiences that were
              once unimaginable.
            </Paragraph>

            <Paragraph>
              From action-packed adventures that transport players to
              fantastical worlds, to strategic challenges that test their
              intellect, there's a game for every taste and preference. Gaming
              has also become a social phenomenon, with online multiplayer games
              connecting players from all corners of the globe.
            </Paragraph>

            <SubHeading>Popular Genres</SubHeading>
            <List>
              <ListItem>
                <strong>Action:</strong> Fast-paced gameplay that often requires
                quick reflexes and precise control. These games can range from
                platformers like Super Mario to intense shooters like Call of
                Duty.
              </ListItem>
              <ListItem>
                <strong>Role-playing (RPG):</strong> Immersive storytelling
                where players assume the roles of characters in a fictional
                world. RPGs often involve character progression,
                decision-making, and exploration.
              </ListItem>
              <ListItem>
                <strong>Strategy:</strong> Games that challenge players to think
                critically and plan strategically. This genre includes real-time
                strategy (RTS) games like Age of Empires and turn-based strategy
                games like Civilization.
              </ListItem>
              <ListItem>
                <strong>Sports:</strong> Simulations of real-world sports
                events. Whether it's football, basketball, or racing, sports
                games aim to replicate the excitement of physical sports in a
                virtual environment.
              </ListItem>
              <ListItem>
                <strong>Simulation:</strong> These games aim to replicate
                real-world activities or scenarios, providing players with a
                realistic experience. This can range from flight simulators to
                farming simulations.
              </ListItem>
              <ListItem>
                <strong>Horror:</strong> Thrilling and suspenseful experiences
                designed to frighten players. These games often involve dark,
                eerie environments and intense moments of suspense.
              </ListItem>
              <ListItem>
                <strong>Multiplayer Online Battle Arena (MOBA):</strong>{" "}
                Team-based competitive gameplay where players control unique
                characters with distinct abilities. The goal is usually to
                destroy the opposing team's base or objectives.
              </ListItem>
            </List>

            <SubHeading>Gaming Platforms</SubHeading>
            <List>
              <ListItem>
                <strong>PC:</strong> Offers high customization and powerful
                hardware for cutting-edge gaming experiences. It's a versatile
                platform with a wide range of titles, from indie games to
                graphically demanding AAA titles.
              </ListItem>
              <ListItem>
                <strong>Console (PlayStation, Xbox, Nintendo):</strong>{" "}
                Dedicated gaming machines with exclusive titles and
                user-friendly interfaces. Each brand offers a unique ecosystem
                of games and services, catering to different gaming preferences
                and communities.
              </ListItem>
              <ListItem>
                <strong>Mobile:</strong> Accessible gaming on smartphones and
                tablets, with a wide range of titles. Mobile games cater to a
                diverse audience, from casual gamers to those seeking immersive
                experiences on the go.
              </ListItem>
            </List>

            <Paragraph>
              Whether you're a casual gamer looking for a quick escape or a
              dedicated enthusiast seeking epic adventures, the world of gaming
              has something to offer for everyone. Stay updated with the latest
              releases and explore the limitless possibilities that await you.
            </Paragraph>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Info;
