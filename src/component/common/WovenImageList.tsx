import ImageList from '@mui/material/ImageList'
import styles from './WovenImageList.module.css'

interface WovenImageListProp {
  imgList: string[]
  cols: number
}

export default function WovenImageList({ imgList, cols }: WovenImageListProp) {
  return (
    <ImageList
      sx={{
        width: '50vw',
        display: 'flex',
        justifyContent: 'space-around',
      }}
      variant="woven"
      cols={cols}
      gap={8}
    >
      {imgList.map((img) => (
        <img
          src={`${img}?w=161&fit=crop&auto=format`}
          srcSet={`${img}?w=161&fit=crop&auto=format&dpr=2 2x`}
          loading="lazy"
          className={styles.image}
          key={img}
          alt={'for Modal'}
        />
      ))}
    </ImageList>
  )
}
