import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { Link } from '@reach/router'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { Ol } from './components/ordered-list'
import { Li } from './components/list-item'
import { Query } from 'react-apollo'
import { GET_LANGUAGE_QUERY } from './utils/queriesAndMutations'
import { TrackPageViews } from './TrackPageViews'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`
const CybercrimeLink = styled('div')`
  padding-top: 20pt;
`

export const LandingPage = () => (
  <Query query={GET_LANGUAGE_QUERY}>
    {({ data: { language } }) => (
      <CenterContent>
        <H1>
          <Trans>Have you or someone you know encountered a cybercrime?</Trans>
        </H1>
        <H2 fontSize={[3, null, 4]}>
          <Trans>Tell us your story in three easy steps:</Trans>
        </H2>
        <TrackPageViews />
        <Ol>
          <Li>
            <Trans>Describe what happened.</Trans>
          </Li>{' '}
          <Li>
            <Trans> Select where you encountered the cybercrime. </Trans>
          </Li>{' '}
          <Li>
            <Trans>Share how you were impacted.</Trans>
          </Li>
        </Ol>
        <P color="green" fontWeight="bolder">
          <Trans>Please do not provide any personal information.</Trans>
        </P>
        <Link to={'form1'}>
          <Trans>Share your story→ </Trans>
        </Link>
        <CybercrimeLink>
          <a
            href={
              language === 'en'
                ? 'http://www.rcmp-grc.gc.ca/en/cybercrime-an-overview-incidents-and-issues-canada'
                : 'http://www.rcmp-grc.gc.ca/fr/cybercriminalite-survol-des-incidents-et-des-enjeux-au-canada'
            }
          >
            <Trans>What is a cybercrime?</Trans>
          </a>
        </CybercrimeLink>
      </CenterContent>
    )}
  </Query>
)
