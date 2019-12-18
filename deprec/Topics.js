import React from 'react';
import styled from 'styled-components';
import { Paper, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Search from '../components/SearchBar.jsx';

export const Features = styled.div`{
    width: 85%;
    margin-left: 5%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1%;
    margin-top: 2%;
    h3 { 
        margin-bottom: 15px;
        margin-left: 15px;
    }
}`

export const TopHeader = styled.h1`{
    font-size: 1.3rem;
    width: 180px;
    margin: 0 auto;
    margin-top: 3%;
}`

export const TopStyles = styled.div`{
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
    input { margin-left: 5% }
}`

export const StyledLinks = styled.ul`{
    display: flex;
    align-items: center;
    padding: 5px;
    flex-direction: column;
}`

export const styles = { 
    featureCard: { 
        height: "100%",
        width: "30%", 
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

const Topics = ( props ) => {

    const { classes } = props;

    return (
        <div>
            <TopHeader> Browse Content </TopHeader>
            <TopStyles>
                <Search />
            </TopStyles>
            <Features>
                <Paper className={ classes.featureCard } elevation='1' >
                    <h3> Physics </h3>
                    <StyledLinks>
                        <Link href="https://www.nuancity.com/topic" className={ classes.link }> Abnormal Psychology  </Link>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>                     
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                    </StyledLinks>
                </Paper>
                <Paper className={ classes.featureCard }  elevation='1' >
                    <h3> Psychology </h3>
                    <StyledLinks>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                    </StyledLinks>
                </Paper>
                <Paper className={ classes.featureCard }  elevation='1' >
                    <h3> Philosophy </h3>
                    <StyledLinks>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>                      
                    </StyledLinks>
                </Paper>
                <Paper className={ classes.featureCard }  elevation='1' >
                    <h3> Politics </h3>
                    <StyledLinks>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>                         
                    </StyledLinks>
                </Paper>
                <Paper className={ classes.featureCard } elevation='1' >
                    <h3> Physics </h3>
                    <StyledLinks>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>                             
                    </StyledLinks>
                </Paper>
                <Paper className={ classes.featureCard }  elevation='1' >
                    <h3> Psychology </h3>
                    <StyledLinks>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>
                        <Link className={ classes.link }> Abnormal Psychology  </Link>                           
                    </StyledLinks>
                </Paper>
            </Features>
        </div>
    )
}

export default withStyles( styles )( Topics );