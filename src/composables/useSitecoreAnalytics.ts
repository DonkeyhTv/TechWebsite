import { ref } from 'vue'

interface TrackingEvent {
  eventName: string
  properties?: Record<string, any>
  timestamp?: number
}

interface PageView {
  path: string
  title: string
  duration?: number
}

const events = ref<TrackingEvent[]>([])
const pageViews = ref<PageView[]>([])

export const useSitecoreAnalytics = () => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    const event: TrackingEvent = {
      eventName,
      properties,
      timestamp: Date.now(),
    }

    events.value.push(event)

    console.log('[Sitecore Analytics] Event tracked:', event)

    // En production, envoyer à Sitecore xDB
    // fetch('/api/sitecore/track', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(event)
    // })
  }

  const trackPageView = (path: string, title: string) => {
    const pageView: PageView = {
      path,
      title,
    }

    pageViews.value.push(pageView)

    console.log('[Sitecore Analytics] Page view tracked:', pageView)
  }

  const trackGoal = (goalName: string, value?: number) => {
    trackEvent('goal_conversion', {
      goal: goalName,
      value: value || 1,
    })
  }

  const identifyVisitor = (visitorData: {
    email?: string
    name?: string
    company?: string
    [key: string]: any
  }) => {
    console.log('[Sitecore Analytics] Visitor identified:', visitorData)

    // Envoyer à Sitecore xDB pour créer/mettre à jour le contact
  }

  const getEngagementValue = () => {
    // Calculer la valeur d'engagement basée sur les interactions
    const eventScore = events.value.length * 10
    const pageViewScore = pageViews.value.length * 5

    return eventScore + pageViewScore
  }

  return {
    trackEvent,
    trackPageView,
    trackGoal,
    identifyVisitor,
    getEngagementValue,
    events,
    pageViews,
  }
}
