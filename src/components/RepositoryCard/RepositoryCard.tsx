import React from "react";
import { Repository } from "../../common/types";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import "./repository-card.scss";
import StarIcon from "@material-ui/icons/Star";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";

type RepositoryCardProps = {
  repository: Repository;
};

export const RepositoryCard: React.FC<RepositoryCardProps> = ({
  repository,
}) => {
  return (
    <Paper elevation={3} className="c-repository-card">
      <div>
        <div className="c-repository-card__heading">
          <Avatar
            className="c-repository-card__avatar"
            alt="Avatar"
            src={repository.owner.avatar_url}
          />
          <Typography variant="h4" gutterBottom>
            {repository.full_name}
          </Typography>
        </div>

        <div className="c-repository-card__description">
          <Typography variant="subtitle1" gutterBottom>
            {repository.description}
          </Typography>
        </div>
      </div>
      <div className="c-repository-card__badges">
        <List className="c-repository-card__list">
          <ListItem>
            <ListItemAvatar>
              <GitHubIcon />
            </ListItemAvatar>
            <ListItemText primary={repository.id} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <StarIcon />
            </ListItemAvatar>
            <ListItemText primary={repository.stargazers_count} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <VisibilityIcon />
            </ListItemAvatar>
            <ListItemText primary={repository.watchers_count} />
          </ListItem>
        </List>
      </div>
    </Paper>
  );
};
