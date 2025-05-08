import {
  Box,
  GridContainer,
  CategoryCard,
  GridRow,
  GridColumn,
  Text,
} from '@island.is/island-ui/core'
import { useLanguage } from '../contexts/LanguageContext'
import WebReader from '../components/WebReader'
import { SimpleVideoPlayer } from '../components/videoPlayer/SimpleVideoPlayer'
import { SearchSection } from '../components/home/SearchSection'
import { TabsSection } from '../components/home/TabsSection'
import { BroadcastSection } from '../components/home/BroadcastSection'
import NewOnTheWebSection from '../components/home/NewOnTheWebSection'

const Home = () => {
  const { t } = useLanguage()

  return (
    <Box>
      <WebReader readId="main-content" />
      <GridContainer id="main-content">
        <Box marginTop={4}>
          <Box
            display="flex"
            flexDirection={['column', 'row']}
            alignItems="center"
            style={{ gap: 24 }}
            marginX={4}
          >
            <SearchSection 
              placeholder={t('home.search.placeholder')}
              buttonText={t('home.search.button')}
            />
            <Box display={['none', 'none', 'block']}>
              <SimpleVideoPlayer
                controls={false}
                url="https://videos.ctfassets.net/8k0h54kbe6bj/6evxh8D2Pt6nrSJa2F0KQH/bd0867a88663f70c1b211fbc86f122ac/vor2022-desktop.mp4"
                title="Althingi video"
              />
            </Box>
          </Box>
          <TabsSection 
            popularText={t('home.tabs.popular')}
            newText={t('home.tabs.new')}
            allText={t('home.tabs.all')}
          />
          <BroadcastSection 
            title={t('home.broadcast.title')}
            viewAllText={t('home.broadcast.viewAll')}
          />
          <NewOnTheWebSection 
            title={t('home.newOnWeb.title')}
            viewAllText={t('home.newOnWeb.viewAll')}
          />
        </Box>
      </GridContainer>
    </Box>
  )
}

export default Home
