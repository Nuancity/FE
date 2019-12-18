import React from 'react';
import styled from 'styled-components';
import Search from '../components/SearchBar';
import { Paper, Link } from '@material-ui/core';
import { StyledLinks } from './Topics.js';
import { withStyles } from '@material-ui/core/styles';
import Post  from '../components/Post.jsx';

const LeftMenu = styled.div`{
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    div { width: 45%; }
}`

const Feed = styled.div`{
    margin: 0 auto;
    margin-top: 3%;
    background-color: whitesmoke;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: space-around;
}`

const TopicsCards = styled.div`{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 2%;
}`


export const styles = { 
    featureCard: { 
        height: "120px",
        width: "50%", 
        marginTop: "2%", 
        padding: "1%", 
        boxShadow: "1px 1px 1px 1px #4c8893" 
    },
    link: {
        color: "black",
        cursor: "pointer",
        fontSize: "14px"
    }
}

const TopicFeed = ( props ) => {
    const { classes } = props;

    return (
        <div>
            <Search />
            <LeftMenu>
                <TopicsCards>
                    <Paper className={ classes.featureCard } elevation='1' >
                        <h3> Physics </h3>
                        <StyledLinks>
                            <Link href="https://www.nuancity.com/topic" className={ classes.link }> Abnormal Psychology  </Link>
                            <Link className={ classes.link }> Abnormal Psychology  </Link>
                            <Link className={ classes.link }> Abnormal Psychology  </Link>                     
                            <Link className={ classes.link }> Abnormal Psychology  </Link>
                        </StyledLinks>
                    </Paper>
                    <Paper className={ classes.featureCard } elevation='1' >
                        <h3> Physics </h3>
                        <StyledLinks>
                            <Link href="https://www.nuancity.com/topic" className={ classes.link }> Abnormal Psychology  </Link>
                            <Link className={ classes.link }> Abnormal Psychology  </Link>
                            <Link className={ classes.link }> Abnormal Psychology  </Link>                     
                            <Link className={ classes.link }> Abnormal Psychology  </Link>
                        </StyledLinks>
                    </Paper>
                    <Paper className={ classes.featureCard } elevation='1' >
                        <h3> Physics </h3>
                        <StyledLinks>
                            <Link href="https://www.nuancity.com/topic" className={ classes.link }> Abnormal Psychology  </Link>
                            <Link className={ classes.link }> Abnormal Psychology  </Link>
                            <Link className={ classes.link }> Abnormal Psychology  </Link>                     
                            <Link className={ classes.link }> Abnormal Psychology  </Link>
                        </StyledLinks>
                    </Paper>
                    <Paper className={ classes.featureCard } elevation='1' >
                        <h3> Physics </h3>
                        <StyledLinks>
                            <Link href="https://www.nuancity.com/topic" className={ classes.link }> Abnormal Psychology  </Link>
                            <Link className={ classes.link }> Abnormal Psychology  </Link>
                            <Link className={ classes.link }> Abnormal Psychology  </Link>                     
                            <Link className={ classes.link }> Abnormal Psychology  </Link>
                        </StyledLinks>
                    </Paper>
                </TopicsCards>
                <Paper>
                    <h3> Hot Topics </h3>
                    <p> Is IQ determined by Nature or Nurture? <i class="far fa-eye"></i> </p>
                    <p> Is Autism a disorder or a difference? <i class="far fa-eye"></i> </p>
                    <p> Is IQ determined by Nature or Nurture? <i class="far fa-eye"></i> </p>
                    <p> Is Autism a disorder or a difference? <i class="far fa-eye"></i> </p>
                </Paper>
            </LeftMenu>

            <Feed>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </Feed>
        </div>
    )
}

export default withStyles( styles )( TopicFeed );


// media queries needed for shrinking browser