// Notification sound utilities for the spy dashboard
// Uses Web Audio API to generate sounds without external files

class NotificationSounds {
  constructor() {
    this.audioContext = null
    this.isEnabled = true
    this.volume = 0.3
  }

  // Initialize audio context (required for Web Audio API)
  initAudioContext() {
    if (this.audioContext) return
    
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    } catch (error) {
      console.warn('Web Audio API not supported, notification sounds disabled')
      this.isEnabled = false
    }
  }

  // Generate a pleasant notification sound
  playNewVisitorSound() {
    if (!this.isEnabled) return
    
    this.initAudioContext()
    
    try {
      // Create oscillator for the main tone
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()
      
      // Connect nodes
      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)
      
      // Set up the sound
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime) // Start at 800Hz
      oscillator.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 0.1) // Rise to 1200Hz
      oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.3) // Fall to 600Hz
      
      // Set up volume envelope
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(this.volume, this.audioContext.currentTime + 0.05)
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.4)
      
      // Play the sound
      oscillator.start(this.audioContext.currentTime)
      oscillator.stop(this.audioContext.currentTime + 0.4)
      
    } catch (error) {
      console.warn('Failed to play notification sound:', error)
    }
  }

  // Play a different sound for page views
  playPageViewSound() {
    if (!this.isEnabled) return
    
    this.initAudioContext()
    
    try {
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)
      
      // Shorter, higher-pitched sound for page views
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(1000, this.audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.15)
      
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(this.volume * 0.6, this.audioContext.currentTime + 0.02)
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.2)
      
      oscillator.start(this.audioContext.currentTime)
      oscillator.stop(this.audioContext.currentTime + 0.2)
      
    } catch (error) {
      console.warn('Failed to play page view sound:', error)
    }
  }

  // Play a sound for scroll depth milestones
  playScrollSound() {
    if (!this.isEnabled) return
    
    this.initAudioContext()
    
    try {
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)
      
      // Very short, soft sound for scroll
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime)
      
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(this.volume * 0.3, this.audioContext.currentTime + 0.01)
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.1)
      
      oscillator.start(this.audioContext.currentTime)
      oscillator.stop(this.audioContext.currentTime + 0.1)
      
    } catch (error) {
      console.warn('Failed to play scroll sound:', error)
    }
  }

  // Enable/disable sounds
  setEnabled(enabled) {
    this.isEnabled = enabled
    localStorage.setItem('notification_sounds_enabled', enabled.toString())
  }

  // Set volume (0.0 to 1.0)
  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume))
    localStorage.setItem('notification_sounds_volume', this.volume.toString())
  }

  // Load settings from localStorage
  loadSettings() {
    const enabled = localStorage.getItem('notification_sounds_enabled')
    const volume = localStorage.getItem('notification_sounds_volume')
    
    if (enabled !== null) this.isEnabled = enabled === 'true'
    if (volume !== null) this.volume = parseFloat(volume)
  }

  // Initialize with saved settings
  init() {
    this.loadSettings()
  }
}

// Create and export a singleton instance
export const notificationSounds = new NotificationSounds()
export default notificationSounds

