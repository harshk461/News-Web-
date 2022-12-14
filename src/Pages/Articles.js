import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Article from '../components/Article';
import PropTypes from 'prop-types';
import { Audio } from 'react-loader-spinner'

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0,0,0,0.3)",
        backgroundColor: "#fafafa",

    },
    media: {
        height: 300,
    }
})

export default function Articles({ loading, articles }) {
    const classes = useStyles();
    return (
        <>
            {
                loading ? (
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="green"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />
                ) : (
                    <div className={classes.root} >
                        <Grid container spacing={3}>
                            {articles.map((article) => (
                                <Grid item xs={12} sm={4} key={article._id}>
                                    <Article article={article} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>)}
        </>
    )
}

Articles.protoTypes = {
    loading: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired,
};

