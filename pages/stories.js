import {
  FootnotesProvider,
  FootnoteRef as Ref,
  Footnotes,
} from 'react-a11y-footnotes'

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from 'react-twitter-embed';

// And the styles
import 'react-a11y-footnotes/dist/styles.css'

const Persona = ({nickname, name, img, challenge, answer, opportunity}) => (
  <div className="max-w-sm space-y-2 rounded bg-gray-50 w-80 p-2 relative">
    <img class="rounded" src={img}/>
    <h3 class="font-semi-bold">{name}</h3>
    <div class="font-light italic text-gray-700 border-l-2 pl-4">{challenge}</div>
    <ul class="font-normal">{answer.map((text, index) => <li key={index}> {text}</li>)}</ul>
    <div class="text-white bg-gradient-to-br from-purple-500 to-indigo-500 -m-2 p-2">{opportunity.map(text => <li>{text}</li>)}</div>
  </div>
)

const data = [{
  nickname: "Can't find an installer",
  name: "Mary",
  img: "http://via.placeholder.com/150",
  challenge: <span>Called up four numbers, and they’re all busy or tried to convince me to install a gas furnace</span>,
  answer: ["Try finding an HVAC/furnace installer who exclusively installs heat pump if one exists in your area"],
  opportunity: ["Could be a business opportunity in this area for heat pump installations."]
}, {
  nickname: "It's winter and my furnace just broke",
  name: "Colin",
  img: "http://via.placeholder.com/150",
  challenge: "Don't want to pay for space heaters and have a cold house while I wait for an installation",
  answer: [<span>This is a challenging situation.  Often, when faced with a need
    to make a quick decision, we’re more likely to go with what we’re familiar
    with. Hindsight 20/20, but doing a bit of research and making a plan if you
    already know you have an aging furnace <Ref description={<TwitterTweetEmbed
  tweetId={'1415358135934627841'}
/>}>is advisable</Ref> </span>],
  opportunity: [`The goal for heat pump installers should be to be at the front
    of mind when this happens, and also have an ease of installation that
    matches that of gas furnaces. Need to work on ways to target sales to
    people with aging furnaces, and get installs done before they break, or get
    a service call to a gas/oil furnace technician who might offer a
    replacement of the same.`],
}, {
  nickname: "Left me hanging",
  name: "Edith",
  img: "http://via.placeholder.com/150",
  challenge: `Contractor said they’d take care of the rebates, and haven’t been
  responsive since they finished the installation.`,
  answer: [`Before settling on a contractor, it might be worthwhile getting in
    touch with an existing customer to hear about their experience.
`,`Typically, you’ll pay your contractor half of the costs upfront, and the
remaining after installation.  If your contractor has promised to help with
paperwork, or there is paperwork you require from your contractor, make sure to
have it in hand from them before you pay the remainder.
`, `Make sure to leave a review for your contractor (google, yelp, BBB).
Around 75% of people read reviews via one of these three sites before
choosing a contractor (source pickhvac.com)`, `If negotiating with a contractor,
consider negotiating on aspects other than price, like labour warranty.`],
  opportunity: [`Finding a way to streamline applying for rebates`]
}, {
  nickname: "Analysis Paralysis",
  name: "Devon",
  img: "http://via.placeholder.com/150",
  challenge: `First, I needed to book an electrician to upgrade to a larger
  than 60amp.  But I was thinking I’d also like to get solar at some point, and
  battery storage, and an electric vehicle.  How do I make sure I don't get the
  wrong panel for these future upgrades?`,
 answer: [``],
 opportunity: [`In a lot of areas, it’s easier to connect to gas than upgrade
   your electrical service.  Consumers can often pay full cost upfront for
   upgrading their connection to their utility.  There is an opportunity for
   utilities to amortize these costs and not charge so much upfront.", "Also,
   there might be an opportunity here for businesses that provide a whole-house
   electrification service that takes the planning and guesswork away, and
   allows the customer to upgrade in stages.`]
}]

export default function StoriesPage() {
  return (
    <div class="center">
      <h1 class="text-4xl mb-6">Your stories</h1>
      <FootnotesProvider>
      <div class="text-lg max-width font-light">
        We've been collecting stories trying to find the biggest barriers people
      face when trying to install heat pumps.  After a number of discussions and interviews with homeowners from across the US and Canada
      several common challenges began to emerge. <Ref description='Cascading Style Sheets'>CSS</Ref>{' '}
      </div>
      <div className="flex space-x-4 justify-items-center">
      {data.map(persona_data => {return (
          <Persona {...persona_data} />
        )
      })
      }
      </div>
      <Footnotes label='Footnotes' backLabel='Back to content' />
      </FootnotesProvider>
  </div>
)
}
