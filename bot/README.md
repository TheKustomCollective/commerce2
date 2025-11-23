# Agentic Bot for Living Legacy Awareness

## Overview
This directory will contain the autonomous bot system for Living Legacy awareness campaigns, social media automation, and customer engagement.

## Planned Capabilities

### Core Functions
- **Web Search & Content Curation**: Automatically discover and curate relevant end-of-life planning content
- **Social Media Management**: Schedule and post across multiple platforms
- **Survey Creation & Distribution**: Generate surveys to understand customer needs
- **Email Campaign Automation**: Targeted email campaigns with personalized content
- **Calendar-Based Awareness Events**: Automated reminders and awareness campaigns

### Technology Stack (Planned)

#### Platform Options
- **GitHub Copilot Studio**: Low-code agent creation with Microsoft 365 integration
- **Open Source Alternative**: LangGraph + autonomous agent framework

#### Integration Points
- Microsoft Graph API for calendar and email
- Social media APIs (Twitter, Facebook, LinkedIn, Instagram)
- GitHub Actions for workflow automation
- Vercel for hosting and serverless functions

### Development Roadmap

#### Phase 1: Foundation (Current)
- [ ] Define bot persona and guidelines in `agents.md`
- [ ] Set up GitHub Actions workflows
- [ ] Create basic automation scripts

#### Phase 2: Social Media Automation
- [ ] Connect social media accounts
- [ ] Create content calendar system
- [ ] Implement post scheduling
- [ ] Add engagement monitoring

#### Phase 3: Survey & Email
- [ ] Build survey generation system
- [ ] Set up email automation
- [ ] Create segment-based targeting
- [ ] Implement analytics tracking

#### Phase 4: AI Enhancement
- [ ] Add natural language processing
- [ ] Implement response automation
- [ ] Create personalization engine
- [ ] Add predictive scheduling

## File Structure
```
/bot
  ├── README.md (this file)
  ├── agents.md (bot persona and instructions)
  ├── /workflows
  │   ├── social-media.yml
  │   ├── email-campaigns.yml
  │   └── survey-automation.yml
  ├── /scripts
  │   ├── content-curator.js
  │   ├── social-poster.js
  │   └── survey-generator.js
  └── /config
      ├── social-accounts.json
      └── campaign-calendar.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- GitHub account with Actions enabled
- Vercel account (for deployment)
- Social media API credentials
- Microsoft 365 account (for Graph API)

### Environment Variables Needed
```env
# Social Media
TWITTER_API_KEY=
TWITTER_API_SECRET=
FACEBOOK_ACCESS_TOKEN=
LINKEDIN_ACCESS_TOKEN=

# Microsoft 365
MICROSOFT_CLIENT_ID=
MICROSOFT_CLIENT_SECRET=
MICROSOFT_TENANT_ID=

# Email
SENDGRID_API_KEY=

# Vercel
VERCEL_TOKEN=
VERCEL_ORG_ID=
VERCEL_PROJECT_ID=
```

## Contributing

When adding bot functionality:
1. Document the feature in this README
2. Update `agents.md` with new capabilities
3. Create corresponding GitHub Actions workflow
4. Test thoroughly before deploying to production

## Resources

- [GitHub Copilot Studio](https://docs.github.com/en/copilot)
- [LangGraph Documentation](https://github.com/langchain-ai/langgraph)
- [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)

## Status

🚧 **In Development** - Bot infrastructure is being planned and will be implemented in phases.

## Contact

For questions about bot development:
- Email: dev@livinglegacy.commercecult.app
- GitHub Issues: Use this repository's issue tracker
