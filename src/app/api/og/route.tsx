import { ImageResponse, NextRequest } from 'next/server';
import { CSSProperties } from 'react';

export const runtime = 'edge';
const font = fetch(
  new URL(
    '../../../../public/fonts/Kaisei_Tokumin/kaisei-tokumin-bold.ttf',
    import.meta.url
  )
).then((res) => res.arrayBuffer());

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const postTitle = searchParams.get('title');
  const fontData = await font;
  const styles: { styleImg: CSSProperties; styleTitle: CSSProperties } = {
    styleImg: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundImage: 'url(http://localhost:3000/og-bg.png)',
    },
    styleTitle: {
      marginLeft: 190,
      marginRight: 190,
      display: 'flex',
      fontSize: 130,
      fontFamily: 'Kaisei Tokumin',
      letterSpacing: '-0.05em',
      fontStyle: 'normal',
      color: 'white',
      lineHeight: '100px',
      whiteSpace: 'pre-wrap',
    },
  };

  const ImageResponseHTML = (
    <div style={styles.styleImg}>
      <div style={styles.styleTitle}>{postTitle}</div>
    </div>
  );
  return new ImageResponse(ImageResponseHTML, {
    width: 1920,
    height: 1080,
    fonts: [{ name: 'Kaisei Tokumin', data: fontData, style: 'normal' }],
  });
}
