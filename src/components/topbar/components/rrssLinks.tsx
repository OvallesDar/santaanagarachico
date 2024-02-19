import Image from "next/image"

const rrss = [
    {
        social: 'instagram',
        href: 'https://www.instagram.com/santaanastreetgoods?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
        social: 'facebook',
        href: 'https://www.facebook.com/santaanastreetgoods/'
    },
    /* {
        social: 'google',
        href: 'https://www.google.com/maps/place/Santa+Ana+Garachico.+Store+%26+Street+Goods/@28.3735096,-16.7665874,17z/data=!3m1!4b1!4m6!3m5!1s0xc6a6368dc287635:0xe3859b53c9eac7eb!8m2!3d28.3735049!4d-16.7640125!16s%2Fg%2F11r1h8hmvw?entry=ttu'
    }, */
    

]

function RRSSLinks() {
  return (
    rrss.map(({href, social}) => (
        <a href={href} target="_blank" key={social}>
            <Image  
            src={`/icons/${social}.png`}
            alt={social}
            width={30}
            height={30}/>
        </a>
    ))

  )
}

export default RRSSLinks